import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChatForwardLine = /* @__PURE__ */ memo(function ChatForwardLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385 5.763 17H20V5H4zM12 10V7l4 4-4 4v-3H8v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat Forward Line
 * @see {@link https://remixicon.com/icon/chat-forward-line Remix Icon Docs}
 */
export { ChatForwardLine }
