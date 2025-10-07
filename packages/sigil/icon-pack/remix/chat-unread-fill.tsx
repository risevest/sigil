import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 2q.515 0 1-.1V18a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1h13.1q-.1.486-.1 1a5 5 0 0 0 5 5" />
    </Svg>
  )
})
Icon.displayName = 'ChatUnreadFill'
/**
 * Remix Icon: Chat Unread Fill
 * @see {@link https://remixicon.com/icon/chat-unread-fill Remix Icon Docs}
 */
export const ChatUnreadFill = Icon
