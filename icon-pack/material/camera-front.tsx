import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 20V22H10V24L13 21L10 18V20H5ZM14 20H19V22H14V20ZM11.99 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 11.99 4C10.88 4 10 4.9 10 6C10 7.1 10.89 8 11.99 8ZM17 0H7C5.9 0 5 0.9 5 2V16C5 17.1 5.9 18 7 18H17C18.1 18 19 17.1 19 16V2C19 0.9 18.1 0 17 0ZM17 16H7V14H17V16ZM17 12.5C17 10.83 13.67 10 12 10C10.33 10 7 10.83 7 12.5V2H17V12.5Z" />
    </Svg>
  )
}

Icon.displayName = 'CameraFront'

/**
 * Material Icon: Camera Front
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:camera_front Material Icon Docs}
 */
export const CameraFront = memo(Icon)
