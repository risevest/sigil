import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14.45 19 12 22.5 9.55 19H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-1.041-2H20V5H4v12h6.591L12 19.012z" />
    </svg>
  )
})
Icon.displayName = 'Chat2Line'
/**
 * Remix Icon: Chat 2 Line
 * @see {@link https://remixicon.com/icon/chat-2-line Remix Icon Docs}
 */
export const Chat2Line = Icon
