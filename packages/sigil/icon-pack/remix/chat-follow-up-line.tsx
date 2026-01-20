import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChatFollowUpLine = /* @__PURE__ */ memo(function ChatFollowUpLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-1 2H4v13.385L5.763 17H20zm-3 2v8h-2V7zm-6 1v1.999L13 10v2l-2-.001V14H9v-2.001L7 12v-2l2-.001V8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat Follow Up Line
 * @see {@link https://remixicon.com/icon/chat-follow-up-line Remix Icon Docs}
 */
export { ChatFollowUpLine }
