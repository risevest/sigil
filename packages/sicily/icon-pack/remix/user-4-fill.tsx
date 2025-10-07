import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 20h14v2H5zm7-2a8 8 0 1 1 0-16 8 8 0 0 1 0 16" />
    </svg>
  )
})
Icon.displayName = 'User4Fill'
/**
 * Remix Icon: User 4 Fill
 * @see {@link https://remixicon.com/icon/user-4-fill Remix Icon Docs}
 */
export const User4Fill = Icon
