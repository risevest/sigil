import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VideoChatLine = /* @__PURE__ */ memo(function VideoChatLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 10.25 17 8v6l-3-2.25V14H7V8h7zM5.763 17H20V5H4v13.385zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Video Chat Line
 * @see {@link https://remixicon.com/icon/video-chat-line Remix Icon Docs}
 */
export { VideoChatLine }
