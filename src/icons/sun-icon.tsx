import { forwardRef, useImperativeHandle } from 'react'
import type { AnimatedIconHandle, AnimatedIconProps } from './types'
import { motion, useAnimate } from 'motion/react'

const SunIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }, ref) => {
    const [scope, animate] = useAnimate()

    const start = async () => {
      animate('.sun-center', { scale: [1, 0.8, 1] }, { duration: 0.4, ease: 'easeInOut' })
      animate('.sun-rays', { opacity: [1, 0.4, 1] }, { duration: 0.5, ease: 'easeInOut' })
    }
    const stop = () => {
      animate('.sun-center', { scale: 1 }, { duration: 0.2, ease: 'easeOut' })
      animate('.sun-rays', { opacity: 1 }, { duration: 0.2, ease: 'easeOut' })
    }

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
        <circle className="sun-center" cx="12" cy="12" r="4" />
        <g className="sun-rays">
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </g>
      </motion.svg>
    )
  }
)

SunIcon.displayName = 'SunIcon'
export default SunIcon
