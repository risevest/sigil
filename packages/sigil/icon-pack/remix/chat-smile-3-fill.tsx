import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10H2l2.929-2.929A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2m4 11H8a4 4 0 0 0 8 0" />
    </Svg>
  )
})
Icon.displayName = 'ChatSmile3Fill'
/**
 * Remix Icon: Chat Smile 3 Fill
 * @see {@link https://remixicon.com/icon/chat-smile-3-fill Remix Icon Docs}
 */
export const ChatSmile3Fill = Icon
