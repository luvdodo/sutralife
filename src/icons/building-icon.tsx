import { forwardRef, useImperativeHandle } from 'react'
import type { AnimatedIconHandle, AnimatedIconProps } from './types'
import { motion, useAnimate } from 'motion/react'

const BuildingIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }, ref) => {
    const [scope, animate] = useAnimate()
    const start = async () => {
      await animate('.bld', { scale: [1, 1.1, 1] }, { duration: 0.4, ease: 'easeInOut' })
    }
    const stop = () => animate('.bld', { scale: 1 }, { duration: 0.2 })
    useImperativeHandle(ref, () => ({ startAnimation: start, stopAnimation: stop }))
    return (
      <motion.svg
        ref={scope as React.RefObject<SVGSVGElement>}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        onHoverStart={start}
        onHoverEnd={stop}
      >
        <g className="bld">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path d="M10 6h4" />
          <path d="M10 10h4" />
          <path d="M10 14h4" />
          <path d="M10 18h4" />
        </g>
      </motion.svg>
    )
  }
)
BuildingIcon.displayName = 'BuildingIcon'
export default BuildingIcon
