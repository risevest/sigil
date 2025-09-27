import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zm5.53-4.879 4.243-4.242 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414z" />
    </svg>
  )
})
Icon.displayName = 'ChatCheckLine'
/**
 * Remix Icon: Chat Check Line
 * @see {@link https://remixicon.com/icon/chat-check-line Remix Icon Docs}
 */
export const ChatCheckLine = Icon
