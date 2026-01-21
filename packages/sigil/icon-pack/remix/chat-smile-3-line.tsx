import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChatSmile3Line = /* @__PURE__ */ memo(function ChatSmile3Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2l2.929-2.929A9.97 9.97 0 0 1 2 12m4.828 8H12a8 8 0 1 0-8-8c0 2.152.851 4.165 2.343 5.657l1.414 1.414zM8 13h8a4 4 0 0 1-8 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat Smile 3 Line
 * @see {@link https://remixicon.com/icon/chat-smile-3-line Remix Icon Docs}
 */
export { ChatSmile3Line }
