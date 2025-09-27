import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-8 4h-2v8h2zm4 2h-2v6h2zm-8 2H7v4h2z" />
    </svg>
  )
})
Icon.displayName = 'ChatPollFill'
/**
 * Remix Icon: Chat Poll Fill
 * @see {@link https://remixicon.com/icon/chat-poll-fill Remix Icon Docs}
 */
export const ChatPollFill = Icon
