import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5.763 17H20V5H4v13.385zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" />
    </svg>
  )
})
Icon.displayName = 'Chat4Line'
/**
 * Remix Icon: Chat 4 Line
 * @see {@link https://remixicon.com/icon/chat-4-line Remix Icon Docs}
 */
export const Chat4Line = Icon
