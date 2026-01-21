import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VideoDownloadFill = /* @__PURE__ */ memo(function VideoDownloadFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-6 4H8v4H5l4 4 4-4h-3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Video Download Fill
 * @see {@link https://remixicon.com/icon/video-download-fill Remix Icon Docs}
 */
export { VideoDownloadFill }
