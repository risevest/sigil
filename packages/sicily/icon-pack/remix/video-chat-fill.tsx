import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM14 10.25V8H7v6h7v-2.25L17 14V8z" />
    </svg>
  )
})
Icon.displayName = 'VideoChatFill'
/**
 * Remix Icon: Video Chat Fill
 * @see {@link https://remixicon.com/icon/video-chat-fill Remix Icon Docs}
 */
export const VideoChatFill = Icon
