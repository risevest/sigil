import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5.763 17h7.32a6 6 0 0 0 0 2H6.455L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.803a6 6 0 0 0-2-.72V5H4v13.385zm18.187 4.535-1.504-1.503a4 4 0 1 0-1.414 1.414l1.503 1.504zM21 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </svg>
  )
})
Icon.displayName = 'ChatSearchLine'
/**
 * Remix Icon: Chat Search Line
 * @see {@link https://remixicon.com/icon/chat-search-line Remix Icon Docs}
 */
export const ChatSearchLine = Icon
