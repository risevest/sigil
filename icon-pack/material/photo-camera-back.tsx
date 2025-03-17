import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H4V7H8.05L9.88 5H14.12L15.95 7H20V19Z" />
      <Path d="M11.25 16L9 13L6 17H18L14.25 12L11.25 16Z" />
    </Svg>
  )
}

Icon.displayName = 'PhotoCameraBack'

/**
 * Material Icon: Photo Camera Back
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:photo_camera_back Material Icon Docs}
 */
export const PhotoCameraBack = memo(Icon)
