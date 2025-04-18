import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H4V7H8.05L8.64 6.35L9.88 5H14.12L15.36 6.35L15.95 7H20V19Z" />
      <Path d="M12 17C9.79 17 8 15.21 8 13H10L7.5 10.5L5 13H7C7 15.76 9.24 18 12 18C12.86 18 13.65 17.76 14.36 17.38L13.62 16.64C13.13 16.87 12.58 17 12 17Z" />
      <Path d="M12 8C11.14 8 10.35 8.24 9.64 8.62L10.38 9.35C10.87 9.13 11.42 9 12 9C14.21 9 16 10.79 16 13H14L16.5 15.5L19 13H17C17 10.24 14.76 8 12 8Z" />
    </Svg>
  )
}

Icon.displayName = 'FlipCameraIos'

/**
 * Material Icon: Flip Camera Ios
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flip_camera_ios Material Icon Docs}
 */
export const FlipCameraIos = memo(Icon)
