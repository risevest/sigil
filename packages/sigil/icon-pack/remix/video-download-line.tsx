import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 4a1 1 0 0 1 1 1v4.2l5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm-1 2H3v12h12zm-5 2v4h3l-4 4-4-4h3V8zm11 .841-4 2.8v.718l4 2.8z" />
    </Svg>
  )
})
Icon.displayName = 'VideoDownloadLine'
/**
 * Remix Icon: Video Download Line
 * @see {@link https://remixicon.com/icon/video-download-line Remix Icon Docs}
 */
export const VideoDownloadLine = Icon
