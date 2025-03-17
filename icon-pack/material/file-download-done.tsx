import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.13 5.41L18.72 4L9.52999 13.19L5.28 8.95L3.87 10.36L9.52999 16.02L20.13 5.41Z" />
      <Path d="M19 18H5V20H19V18Z" />
    </Svg>
  )
}

Icon.displayName = 'FileDownloadDone'

/**
 * Material Icon: File Download Done
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:file_download_done Material Icon Docs}
 */
export const FileDownloadDone = memo(Icon)
