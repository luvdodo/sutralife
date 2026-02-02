import type { ComponentType } from 'react'
import type { AnimatedIconProps } from '../icons/types'

type Size = 'sm' | 'md' | 'lg' | 'xl'

const sizeMap: Record<Size, number> = { sm: 20, md: 24, lg: 40, xl: 56 }

export interface IconWrapProps {
  /** itshover-style icon component (accepts size, color, className) */
  icon: ComponentType<AnimatedIconProps>
  size?: Size
  className?: string
}

/**
 * Wraps itshover-style icons with consistent size and theme color.
 * Icons from https://github.com/itshover/itshover – animated on hover.
 */
export default function IconWrap({ icon: Icon, size = 'md', className = '' }: IconWrapProps) {
  const px = sizeMap[size]
  const sizeClass = size === 'lg' ? 'icon-wrap-lg' : size === 'xl' ? 'icon-wrap-xl' : ''
  return (
    <span
      className={`icon-wrap ${sizeClass} ${className}`.trim()}
      style={{
        width: px,
        height: px,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--neural-blue)',
      }}
    >
      <Icon size={px} color="var(--neural-blue)" className={className} />
    </span>
  )
}
