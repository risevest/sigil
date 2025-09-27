import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M7 12a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z" />
    </svg>
  )
})
Icon.displayName = 'UserSmileFill'
/**
 * Remix Icon: User Smile Fill
 * @see {@link https://remixicon.com/icon/user-smile-fill Remix Icon Docs}
 */
export const UserSmileFill = Icon
