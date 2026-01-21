import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChatSmileLine = /* @__PURE__ */ memo(function ChatSmileLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zM7 10h2a3 3 0 1 0 6 0h2a5 5 0 0 1-10 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat Smile Line
 * @see {@link https://remixicon.com/icon/chat-smile-line Remix Icon Docs}
 */
export { ChatSmileLine }
