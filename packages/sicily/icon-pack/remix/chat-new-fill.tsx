import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM11 10H8v2h3v3h2v-3h3v-2h-3V7h-2z" />
    </svg>
  )
})
Icon.displayName = 'ChatNewFill'
/**
 * Remix Icon: Chat New Fill
 * @see {@link https://remixicon.com/icon/chat-new-fill Remix Icon Docs}
 */
export const ChatNewFill = Icon
