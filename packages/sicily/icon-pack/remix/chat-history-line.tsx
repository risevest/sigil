import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.708-1.175L2 22l1.176-5.29A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-8 8c0 1.335.326 2.618.94 3.766l.35.654-.656 2.946 2.948-.654.653.349A7.96 7.96 0 0 0 12 20a8 8 0 1 0 0-16m1 3v5h4v2h-6V7z" />
    </svg>
  )
})
Icon.displayName = 'ChatHistoryLine'
/**
 * Remix Icon: Chat History Line
 * @see {@link https://remixicon.com/icon/chat-history-line Remix Icon Docs}
 */
export const ChatHistoryLine = Icon
