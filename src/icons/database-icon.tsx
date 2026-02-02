import { forwardRef, useImperativeHandle } from 'react'
import type { AnimatedIconHandle, AnimatedIconProps } from './types'
import { motion, useAnimate } from 'motion/react'

const DatabaseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }, ref) => {
    const [scope, animate] = useAnimate()
    const start = async () => {
      await animate('.db', { scale: [1, 1.1, 1] }, { duration: 0.4, ease: 'easeInOut' })
    }
    const stop = () => animate('.db', { scale: 1 }, { duration: 0.2 })
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
        <g className="db">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0021 19V5" />
          <path d="M3 12A9 3 0 0021 12" />
        </g>
      </motion.svg>
    )
  }
)
DatabaseIcon.displayName = 'DatabaseIcon'
export default DatabaseIcon
