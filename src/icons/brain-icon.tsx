import { forwardRef, useImperativeHandle } from 'react'
import type { AnimatedIconHandle, AnimatedIconProps } from './types'
import { motion, useAnimate } from 'motion/react'

const BrainIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }, ref) => {
    const [scope, animate] = useAnimate()
    const start = async () => {
      await animate('.brain', { scale: [1, 1.1, 1] }, { duration: 0.4, ease: 'easeInOut' })
    }
    const stop = () => animate('.brain', { scale: 1 }, { duration: 0.2 })
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
        <g className="brain">
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
          <path d="M15 13a4.5 4.5 0 01-3-4 4.5 4.5 0 01-3 4" />
          <path d="M17.599 6.5a3 3 0 00.399-1.375" />
          <path d="M6.003 5.125A3 3 0 006.401 6.5" />
          <path d="M3.477 10.896a4 4 0 01.585-.396" />
          <path d="M19.938 10.5a4 4 0 01.585.396" />
          <path d="M6 18a4 4 0 01-1.967-.516" />
          <path d="M19.967 17.484A4 4 0 0118 18" />
        </g>
      </motion.svg>
    )
  }
)
BrainIcon.displayName = 'BrainIcon'
export default BrainIcon
