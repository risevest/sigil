import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 20V22H10V24L13 21L10 18V20H5ZM14 20H19V22H14V20ZM17 0H7C5.9 0 5 0.9 5 2V16C5 17.1 5.9 18 7 18H17C18.1 18 19 17.1 19 16V2C19 0.9 18.1 0 17 0ZM17 16H7V2H17V16ZM12 7C13.1 7 14 6.1 13.99 5C13.99 3.9 13.09 3 11.99 3C10.89 3 10 3.9 10 5C10 6.1 10.89 7 12 7Z" />
    </Svg>
  )
}

Icon.displayName = 'CameraRear'

/**
 * Material Icon: Camera Rear
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:camera_rear Material Icon Docs}
 */
export const CameraRear = memo(Icon)
