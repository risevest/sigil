import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChatNewFill = /* @__PURE__ */ memo(function ChatNewFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM11 10H8v2h3v3h2v-3h3v-2h-3V7h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat New Fill
 * @see {@link https://remixicon.com/icon/chat-new-fill Remix Icon Docs}
 */
export { ChatNewFill }
