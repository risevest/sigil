import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 2L5.01 20.23C5.13 21.23 5.97 22 7 22H17C18.03 22 18.87 21.23 18.99 20.23L21 2H3ZM17 20L7 20.01L5.89 10H18.1L17 20ZM18.33 8H5.67L5.23 4H18.76L18.33 8ZM12 19C13.66 19 15 17.66 15 16C15 14 12 10.6 12 10.6C12 10.6 9 14 9 16C9 17.66 10.34 19 12 19ZM12 13.91C12.59 14.82 13 15.64 13 16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16C11 15.63 11.41 14.81 12 13.91Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalDrink'

/**
 * Material Icon: Local Drink
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_drink Material Icon Docs}
 */
export const LocalDrink = memo(Icon)
