import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM9.41 14.42L11 12.84V17H13V12.84L14.59 14.43L16 13.01L12.01 9L8 13.01L9.41 14.42Z" />
    </Svg>
  )
}

Icon.displayName = 'DriveFolderUpload'

/**
 * Material Icon: Drive Folder Upload
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:drive_folder_upload Material Icon Docs}
 */
export const DriveFolderUpload = memo(Icon)
