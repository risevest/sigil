import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m7 3.586 2.121-2.121 1.415 1.414L20.414 18l2.121 2.121-1.414 1.415L19 19.414l-2.121 2.121-1.415-1.414L17.587 18l-2.121-2.121 1.414-1.415z" />
    </svg>
  )
})
Icon.displayName = 'UserUnfollowFill'
/**
 * Remix Icon: User Unfollow Fill
 * @see {@link https://remixicon.com/icon/user-unfollow-fill Remix Icon Docs}
 */
export const UserUnfollowFill = Icon
