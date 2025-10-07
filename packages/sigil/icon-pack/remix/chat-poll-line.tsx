import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-1 2H4v13.385L5.763 17H20zm-7 2v8h-2V7zm4 2v6h-2V9zm-8 2v4H7v-4z" />
    </Svg>
  )
})
Icon.displayName = 'ChatPollLine'
/**
 * Remix Icon: Chat Poll Line
 * @see {@link https://remixicon.com/icon/chat-poll-line Remix Icon Docs}
 */
export const ChatPollLine = Icon
