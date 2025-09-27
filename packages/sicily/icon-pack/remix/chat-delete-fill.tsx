import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm6.96-8 2.474-2.475-1.414-1.414L12 9.586 9.525 7.11 8.111 8.525 10.586 11 8.11 13.475l1.414 1.414L12 12.414l2.475 2.475 1.414-1.414z" />
    </svg>
  )
})
Icon.displayName = 'ChatDeleteFill'
/**
 * Remix Icon: Chat Delete Fill
 * @see {@link https://remixicon.com/icon/chat-delete-fill Remix Icon Docs}
 */
export const ChatDeleteFill = Icon
