import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChatVoiceFill = /* @__PURE__ */ memo(function ChatVoiceFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.929 19.071A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H2zM11 6v12h2V6zM7 9v6h2V9zm8 0v6h2V9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat Voice Fill
 * @see {@link https://remixicon.com/icon/chat-voice-fill Remix Icon Docs}
 */
export { ChatVoiceFill }
