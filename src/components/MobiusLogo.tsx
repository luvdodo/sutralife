import { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface MobiusLogoProps {
  size?: number
  /** Use transparent background so navbar/footer background shows through */
  transparent?: boolean
}

export default function MobiusLogo({ size = 40, transparent = true }: MobiusLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const mobiusRef = useRef<THREE.Mesh | null>(null)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    const width = size
    const height = size

    const scene = new THREE.Scene()
    scene.background = transparent ? null : new THREE.Color(0x0a0a0a)
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 4
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: transparent })
    if (transparent) {
      renderer.setClearColor(0x000000, 0)
    }
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const createMobiusStrip = () => {
      const segments = 80
      const stripWidth = 0.5
      const radius = 1.2

      const geometry = new THREE.BufferGeometry()
      const vertices: number[] = []
      const indices: number[] = []
      const colors: number[] = []

      for (let i = 0; i <= segments; i++) {
        const u = (i / segments) * Math.PI * 2
        for (let j = -1; j <= 1; j += 0.5) {
          const v = j * stripWidth
          const x = (radius + v * Math.cos(u / 2)) * Math.cos(u)
          const y = (radius + v * Math.cos(u / 2)) * Math.sin(u)
          const z = v * Math.sin(u / 2)
          vertices.push(x, y, z)
          const hue = (i / segments) * 360
          const color = new THREE.Color(`hsl(${hue}, 75%, 55%)`)
          colors.push(color.r, color.g, color.b)
        }
      }

      for (let i = 0; i < segments; i++) {
        for (let j = 0; j < 4; j++) {
          const a = i * 5 + j
          const b = i * 5 + j + 1
          const c = (i + 1) * 5 + j + 1
          const d = (i + 1) * 5 + j
          indices.push(a, b, c, a, c, d)
        }
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
      geometry.setIndex(indices)
      geometry.computeVertexNormals()
      return geometry
    }

    const material = new THREE.MeshPhongMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
      shininess: 80,
      specular: new THREE.Color(0x333333),
      emissive: new THREE.Color(0x111111),
    })

    const mobius = new THREE.Mesh(createMobiusStrip(), material)
    scene.add(mobius)
    mobiusRef.current = mobius

    const wireframeGeometry = createMobiusStrip()
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    })
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial)
    mobius.add(wireframe)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)
    const pointLight = new THREE.PointLight(0xffffff, 0.8, 100)
    pointLight.position.set(4, 4, 4)
    scene.add(pointLight)

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      const mobiusMesh = mobiusRef.current
      if (mobiusMesh) {
        mobiusMesh.rotation.y += 0.008
        mobiusMesh.rotation.x = Math.sin(Date.now() * 0.001) * 0.15
      }
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameRef.current)
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      sceneRef.current = null
      rendererRef.current = null
      mobiusRef.current = null
    }
  }, [size, transparent])

  return (
    <div
      ref={containerRef}
      className="mobius-logo"
      style={{
        width: size,
        height: size,
        display: 'block',
        flexShrink: 0,
      }}
      aria-hidden
    />
  )
}
