import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-4 4h-2v8h2zm-6 1H9v1.999L7 10v2l2-.001V14h2v-2.001L13 12v-2l-2-.001z" />
    </svg>
  )
})
Icon.displayName = 'ChatFollowUpFill'
/**
 * Remix Icon: Chat Follow Up Fill
 * @see {@link https://remixicon.com/icon/chat-follow-up-fill Remix Icon Docs}
 */
export const ChatFollowUpFill = Icon
