import { forwardRef, useImperativeHandle } from 'react'
import type { AnimatedIconHandle, AnimatedIconProps } from './types'
import { motion, useAnimate } from 'motion/react'

const SmartphoneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }, ref) => {
    const [scope, animate] = useAnimate()
    const start = async () => {
      await animate('.phone', { scale: [1, 1.1, 1] }, { duration: 0.4, ease: 'easeInOut' })
    }
    const stop = () => animate('.phone', { scale: 1 }, { duration: 0.2 })
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
        <g className="phone">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </g>
      </motion.svg>
    )
  }
)
SmartphoneIcon.displayName = 'SmartphoneIcon'
export default SmartphoneIcon
