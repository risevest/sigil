import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 20.981a6.5 6.5 0 0 1-2.936-12 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12V21H7zM13 12V8h-2v4H8l4 5 4-5z" />
    </Svg>
  )
})
Icon.displayName = 'DownloadCloudFill'
/**
 * Remix Icon: Download Cloud Fill
 * @see {@link https://remixicon.com/icon/download-cloud-fill Remix Icon Docs}
 */
export const DownloadCloudFill = Icon
