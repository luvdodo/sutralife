import { forwardRef, useImperativeHandle } from 'react'
import type { AnimatedIconHandle, AnimatedIconProps } from './types'
import { motion, useAnimate } from 'motion/react'

const BookIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, className = '' }, ref) => {
    const [scope, animate] = useAnimate()

    const start = async () => {
      await animate('.book-line', { pathLength: 0, opacity: 0 }, { duration: 0 })
      await animate('.book-line-1', { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.3, ease: 'easeInOut', delay: 0.1 })
      await animate('.book-line-2', { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.3, ease: 'easeInOut', delay: 0.05 })
      await animate('.book-line-3', { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.3, ease: 'easeInOut', delay: 0.05 })
    }

    const stop = () => {
      animate('.book-line', { pathLength: 1, opacity: 1 }, { duration: 0.2 })
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
        <path className="book-line book-line-1" d="M12 7v14" />
        <path
          className="book-line book-line-2 book-line-3"
          d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
        />
      </motion.svg>
    )
  }
)

BookIcon.displayName = 'BookIcon'
export default BookIcon
