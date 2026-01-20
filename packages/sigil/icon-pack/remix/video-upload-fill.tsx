import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VideoUploadFill = /* @__PURE__ */ memo(function VideoUploadFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM9 8l-4 4h3v4h2v-4h3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Video Upload Fill
 * @see {@link https://remixicon.com/icon/video-upload-fill Remix Icon Docs}
 */
export { VideoUploadFill }
