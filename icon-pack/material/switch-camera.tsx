import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 5H16.83L15 3H9L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM9.88 5H14.12L15.95 7H20V19H4V7H8.05" />
      <Path d="M15 12H9V9.5L5.5 13L9 16.5V14H15V16.5L18.5 13L15 9.5V12Z" />
    </Svg>
  )
}

Icon.displayName = 'SwitchCamera'

/**
 * Material Icon: Switch Camera
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:switch_camera Material Icon Docs}
 */
export const SwitchCamera = memo(Icon)
