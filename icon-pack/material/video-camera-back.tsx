import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 10.48V6C18 4.9 17.1 4 16 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H16C17.1 20 18 19.1 18 18V13.52L22 17.5V6.5L18 10.48ZM16 18H4V6H16V18ZM11.62 11.5L9 15L7.38 12.83L5 16H15L11.62 11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'VideoCameraBack'

/**
 * Material Icon: Video Camera Back
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:video_camera_back Material Icon Docs}
 */
export const VideoCameraBack = memo(Icon)
