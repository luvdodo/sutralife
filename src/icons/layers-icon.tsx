import { forwardRef, useImperativeHandle } from 'react'
import type { AnimatedIconHandle, AnimatedIconProps } from './types'
import { motion, useAnimate } from 'motion/react'

const LayersIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }, ref) => {
    const [scope, animate] = useAnimate()
    const start = async () => {
      await animate('.ly', { scale: [1, 1.1, 1] }, { duration: 0.4, ease: 'easeInOut' })
    }
    const stop = () => animate('.ly', { scale: 1 }, { duration: 0.2 })
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
        <g className="ly">
          <path d="m12.83 2.18a2 2 0 00-1.66 0L2.6 6.08a1 1 0 000 1.83l8.58 3.91a2 2 0 001.66 0l8.58-3.9a1 1 0 000-1.83Z" />
          <path d="m22 17.65-9.17 4.16a2 2 0 01-1.66 0L2 17.65" />
          <path d="m22 12.65-9.17 4.16a2 2 0 01-1.66 0L2 12.65" />
        </g>
      </motion.svg>
    )
  }
)
LayersIcon.displayName = 'LayersIcon'
export default LayersIcon
