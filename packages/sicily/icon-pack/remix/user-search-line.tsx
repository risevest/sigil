import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m9.446 9.032 1.504 1.503-1.415 1.415-1.503-1.504a4 4 0 1 1 1.414-1.414M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </svg>
  )
})
Icon.displayName = 'UserSearchLine'
/**
 * Remix Icon: User Search Line
 * @see {@link https://remixicon.com/icon/user-search-line Remix Icon Docs}
 */
export const UserSearchLine = Icon
