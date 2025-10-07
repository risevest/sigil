import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="none" viewBox="0 0 16 17" width="1em" height="1em" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="M6.003 9.088a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M6.003 4.422a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M6.003 13.755a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M10.003 9.088a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M10.003 4.422a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M10.003 13.755a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333"
      />
    </svg>
  )
})
Icon.displayName = 'GripVertical'
/**
 * Lucide Icon: Grip Vertical
 * @see {@link https://lucide.dev/icons/grip-vertical Lucide Icon Docs}
 */
export const GripVertical = Icon
