import { useState, type ReactNode } from 'react'
import { motion } from 'motion/react'

interface CardSwapProps {
  front: ReactNode
  back: ReactNode
  className?: string
}

/**
 * Card that swaps front/back on hover – reactbits-style card-swap.
 * Front: icon + title. Back: description + CTA.
 */
export default function CardSwap({ front, back, className = '' }: CardSwapProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const flip = () => setIsFlipped((prev) => !prev)

  return (
    <motion.div
      className={`card-swap ${className}`}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={flip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), flip())}
      initial={false}
      style={{ perspective: 1000 }}
      aria-pressed={isFlipped}
    >
      <motion.div
        className="card-swap-inner"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="card-swap-face card-swap-front" style={{ backfaceVisibility: 'hidden' }}>
          {front}
        </div>
        <div
          className="card-swap-face card-swap-back"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {back}
        </div>
      </motion.div>
    </motion.div>
  )
}
