import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 6C10.9 6 10 6.9 10 8V12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12V8C14 6.9 13.1 6 12 6ZM20 5H16.83L14.97 3H8.96L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H13V17.91C15.83 17.43 18 14.97 18 12H16C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12H6C6 14.97 8.17 17.43 11 17.91V19H4V7H8.21L8.8 6.35L10.04 5H14.28L15.52 6.35L16.11 7H20V19Z" />
    </Svg>
  )
}

Icon.displayName = 'PermCameraMic'

/**
 * Material Icon: Perm Camera Mic
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:perm_camera_mic Material Icon Docs}
 */
export const PermCameraMic = memo(Icon)
