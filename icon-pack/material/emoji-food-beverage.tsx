import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 19H2V21H20V19Z" />
      <Path d="M20 3H4V13C4 15.21 5.79 17 8 17H14C16.21 17 18 15.21 18 13V10H20C21.11 10 22 9.11 22 8V5C22 3.89 21.11 3 20 3ZM16 13C16 14.1 15.1 15 14 15H8C6.9 15 6 14.1 6 13V5H9V6.4L7.19 7.85C7.07 7.94 7 8.09 7 8.24V12.5C7 12.78 7.22 13 7.5 13H11.5C11.78 13 12 12.78 12 12.5V8.24C12 8.09 11.93 7.94 11.81 7.85L10 6.4V5H16V13ZM9.5 7.28L11 8.48V12H8V8.48L9.5 7.28ZM20 8H18V5H20V8Z" />
    </Svg>
  )
}

Icon.displayName = 'EmojiFoodBeverage'

/**
 * Material Icon: Emoji Food Beverage
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:emoji_food_beverage Material Icon Docs}
 */
export const EmojiFoodBeverage = memo(Icon)
