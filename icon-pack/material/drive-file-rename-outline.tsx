import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 16L11 20H21V16H15Z" />
      <Path d="M12.06 7.19L3 16.25V20H6.75L15.81 10.94L12.06 7.19ZM5.92 18H5V17.08L12.06 10.02L12.98 10.94L5.92 18Z" />
      <Path d="M18.71 8.04C19.1 7.65 19.1 7.02 18.71 6.63L16.37 4.29C16.17 4.09 15.92 4 15.66 4C15.41 4 15.15 4.1 14.96 4.29L13.13 6.12L16.88 9.87L18.71 8.04Z" />
    </Svg>
  )
}

Icon.displayName = 'DriveFileRenameOutline'

/**
 * Material Icon: Drive File Rename Outline
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:drive_file_rename_outline Material Icon Docs}
 */
export const DriveFileRenameOutline = memo(Icon)
