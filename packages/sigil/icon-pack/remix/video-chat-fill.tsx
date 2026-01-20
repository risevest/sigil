import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VideoChatFill = /* @__PURE__ */ memo(function VideoChatFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM14 10.25V8H7v6h7v-2.25L17 14V8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Video Chat Fill
 * @see {@link https://remixicon.com/icon/video-chat-fill Remix Icon Docs}
 */
export { VideoChatFill }
