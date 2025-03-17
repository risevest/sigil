import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 6H12L10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM13.41 15.59L12 17L8 13L12 9L13.41 10.41L11.83 12H16V14H11.83L13.41 15.59Z" />
    </Svg>
  )
}

Icon.displayName = 'DriveFileMoveRtl'

/**
 * Material Icon: Drive File Move Rtl
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:drive_file_move_rtl Material Icon Docs}
 */
export const DriveFileMoveRtl = memo(Icon)
