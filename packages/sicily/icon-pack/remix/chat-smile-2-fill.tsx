import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7.291 20.824 2 22l1.176-5.291A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-4.709-1.176M7 12a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z" />
    </svg>
  )
})
Icon.displayName = 'ChatSmile2Fill'
/**
 * Remix Icon: Chat Smile 2 Fill
 * @see {@link https://remixicon.com/icon/chat-smile-2-fill Remix Icon Docs}
 */
export const ChatSmile2Fill = Icon
