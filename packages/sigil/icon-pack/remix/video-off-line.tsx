import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VideoOffLine = /* @__PURE__ */ memo(function VideoOffLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17 18.414 4.192 4.193 1.415-1.415-19.8-19.799-1.414 1.415L2.586 4H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-2-2V18H3V6h1.586zm8 1.626a.5.5 0 0 1-.292.454L21 16.786V8.841l-4 2.8v1.145l-2-2V6h-4.786l-2-2H16a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41z" />
    </Svg>
  )
})
/**
 * Remix Icon: Video Off Line
 * @see {@link https://remixicon.com/icon/video-off-line Remix Icon Docs}
 */
export { VideoOffLine }
