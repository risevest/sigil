import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VideoOffFill = /* @__PURE__ */ memo(function VideoOffFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17 18.414 4.192 4.193 1.415-1.415-19.8-19.799-1.414 1.415L2.586 4H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zM16 4H8.214l14.494 14.494A.5.5 0 0 0 23 18.04V5.96a.5.5 0 0 0-.787-.41L17 9.2V5a1 1 0 0 0-1-1" />
    </Svg>
  )
})
/**
 * Remix Icon: Video Off Fill
 * @see {@link https://remixicon.com/icon/video-off-fill Remix Icon Docs}
 */
export { VideoOffFill }
