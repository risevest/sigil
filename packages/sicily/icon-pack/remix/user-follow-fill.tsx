import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 14.062V22H4a8 8 0 0 1 9-7.938M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m5.793 6.914 3.535-3.535 1.415 1.414-4.95 4.95-3.536-3.536 1.415-1.414z" />
    </svg>
  )
})
Icon.displayName = 'UserFollowFill'
/**
 * Remix Icon: User Follow Fill
 * @see {@link https://remixicon.com/icon/user-follow-fill Remix Icon Docs}
 */
export const UserFollowFill = Icon
