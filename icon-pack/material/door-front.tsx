import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 19V5C19 3.9 18.1 3 17 3H7C5.9 3 5 3.9 5 5V19H3V21H21V19H19ZM17 19H7V5H17V19ZM13 11H15V13H13V11Z" />
    </Svg>
  )
}

Icon.displayName = 'DoorFront'

/**
 * Material Icon: Door Front
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:door_front Material Icon Docs}
 */
export const DoorFront = memo(Icon)
