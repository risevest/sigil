import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 10.48V6C18 4.9 17.1 4 16 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H16C17.1 20 18 19.1 18 18V13.52L22 17.5V6.5L18 10.48ZM16 18H4V6H16V18Z" />
      <Path d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" />
      <Path d="M14 15.43C14 14.62 13.52 13.9 12.78 13.58C11.93 13.21 10.99 13 10 13C9.01 13 8.07 13.21 7.22 13.58C6.48 13.9 6 14.62 6 15.43V16H14V15.43Z" />
    </Svg>
  )
}

Icon.displayName = 'VideoCameraFront'

/**
 * Material Icon: Video Camera Front
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:video_camera_front Material Icon Docs}
 */
export const VideoCameraFront = memo(Icon)
