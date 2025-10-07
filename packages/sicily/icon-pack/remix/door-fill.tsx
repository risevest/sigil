import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17.998 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-4 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </svg>
  )
})
Icon.displayName = 'DoorFill'
/**
 * Remix Icon: Door Fill
 * @see {@link https://remixicon.com/icon/door-fill Remix Icon Docs}
 */
export const DoorFill = Icon
