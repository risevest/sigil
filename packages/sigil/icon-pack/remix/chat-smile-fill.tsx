import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM7 10a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z" />
    </Svg>
  )
})
Icon.displayName = 'ChatSmileFill'
/**
 * Remix Icon: Chat Smile Fill
 * @see {@link https://remixicon.com/icon/chat-smile-fill Remix Icon Docs}
 */
export const ChatSmileFill = Icon
