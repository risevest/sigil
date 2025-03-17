import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.54 8.46L2 12L5.54 15.54L7.3 13.77L5.54 12L7.3 10.23L5.54 8.46ZM12 18.46L10.23 16.7L8.46 18.46L12 22L15.54 18.46L13.77 16.7L12 18.46ZM18.46 8.46L16.7 10.23L18.46 12L16.7 13.77L18.46 15.54L22 12L18.46 8.46ZM8.46 5.54L10.23 7.3L12 5.54L13.77 7.3L15.54 5.54L12 2L8.46 5.54Z" />
      <Path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
    </Svg>
  )
}

Icon.displayName = 'ControlCamera'

/**
 * Material Icon: Control Camera
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:control_camera Material Icon Docs}
 */
export const ControlCamera = memo(Icon)
