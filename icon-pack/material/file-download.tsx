import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z" />
    </Svg>
  )
}

Icon.displayName = 'FileDownload'

/**
 * Material Icon: File Download
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:file_download Material Icon Docs}
 */
export const FileDownload = memo(Icon)
