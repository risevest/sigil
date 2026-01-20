import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VideoOnFill = /* @__PURE__ */ memo(function VideoOnFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17 9.2 5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Video On Fill
 * @see {@link https://remixicon.com/icon/video-on-fill Remix Icon Docs}
 */
export { VideoOnFill }
