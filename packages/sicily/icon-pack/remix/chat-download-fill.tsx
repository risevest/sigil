import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM13 11V7h-2v4H8l4 4 4-4z" />
    </svg>
  )
})
Icon.displayName = 'ChatDownloadFill'
/**
 * Remix Icon: Chat Download Fill
 * @see {@link https://remixicon.com/icon/chat-download-fill Remix Icon Docs}
 */
export const ChatDownloadFill = Icon
