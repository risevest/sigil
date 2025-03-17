import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 13H8V11H10V13ZM16 11H14V13H16V11ZM21 19V21H3V19H4V5C4 3.9 4.9 3 6 3H18C19.1 3 20 3.9 20 5V19H21ZM11 5H6V19H11V5ZM18 5H13V19H18V5Z" />
    </Svg>
  )
}

Icon.displayName = 'DoorSliding'

/**
 * Material Icon: Door Sliding
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:door_sliding Material Icon Docs}
 */
export const DoorSliding = memo(Icon)
