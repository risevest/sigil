import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6m1 11V8.9a5 5 0 0 1-2 0V17H5.763L4 18.385V5h12.1a5 5 0 0 1 0-2H3a1 1 0 0 0-1 1v18.5L6.455 19H21a1 1 0 0 0 1-1" />
    </svg>
  )
})
Icon.displayName = 'ChatUnreadLine'
/**
 * Remix Icon: Chat Unread Line
 * @see {@link https://remixicon.com/icon/chat-unread-line Remix Icon Docs}
 */
export const ChatUnreadLine = Icon
