import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM6 20V4H13V9H18V20H6Z" />
    </Svg>
  )
}

Icon.displayName = 'InsertDriveFile'

/**
 * Material Icon: Insert Drive File
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:insert_drive_file Material Icon Docs}
 */
export const InsertDriveFile = memo(Icon)
