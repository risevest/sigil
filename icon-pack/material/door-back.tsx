import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 19V5C19 3.9 18.1 3 17 3H7C5.9 3 5 3.9 5 5V19H3V21H21V19H19ZM17 19H7V5H17V19Z" />
      <Path d="M11 11H9V13H11V11Z" />
    </Svg>
  )
}

Icon.displayName = 'DoorBack'

/**
 * Material Icon: Door Back
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:door_back Material Icon Docs}
 */
export const DoorBack = memo(Icon)
