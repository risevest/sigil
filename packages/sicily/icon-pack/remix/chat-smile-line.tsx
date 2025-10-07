import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zM7 10h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0" />
    </svg>
  )
})
Icon.displayName = 'ChatSmileLine'
/**
 * Remix Icon: Chat Smile Line
 * @see {@link https://remixicon.com/icon/chat-smile-line Remix Icon Docs}
 */
export const ChatSmileLine = Icon
