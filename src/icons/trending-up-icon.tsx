import { forwardRef, useImperativeHandle } from 'react'
import type { AnimatedIconHandle, AnimatedIconProps } from './types'
import { motion, useAnimate } from 'motion/react'

const TrendingUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }, ref) => {
    const [scope, animate] = useAnimate()
    const start = async () => { await animate('.trend', { scale: [1, 1.1, 1] }, { duration: 0.4, ease: 'easeInOut' }) }
    const stop = () => animate('.trend', { scale: 1 }, { duration: 0.2 })
    useImperativeHandle(ref, () => ({ startAnimation: start, stopAnimation: stop }))
    return (
      <motion.svg ref={scope as React.RefObject<SVGSVGElement>} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} onHoverStart={start} onHoverEnd={stop}>
        <g className="trend">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </g>
      </motion.svg>
    )
  }
)
TrendingUpIcon.displayName = 'TrendingUpIcon'
export default TrendingUpIcon
