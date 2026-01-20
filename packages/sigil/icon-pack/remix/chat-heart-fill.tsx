import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ChatHeartFill = /* @__PURE__ */ memo(function ChatHeartFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm5.563-4.3 3.358-3.359a2.25 2.25 0 1 0-3.181-3.182l-.177.177-.177-.177a2.25 2.25 0 0 0-3.182 3.182z" />
    </Svg>
  )
})
/**
 * Remix Icon: Chat Heart Fill
 * @see {@link https://remixicon.com/icon/chat-heart-fill Remix Icon Docs}
 */
export { ChatHeartFill }
