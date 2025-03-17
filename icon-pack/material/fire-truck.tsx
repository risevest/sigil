import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22.9 10.69L21.46 6.37C21.18 5.55 20.42 5 19.56 5H19V4C19 3.45 18.55 3 18 3H17C16.45 3 16 3.45 16 4V5H14C12.9 5 12 5.9 12 7V11H1V16C1 17.1 1.9 18 3 18H4C4 19.66 5.34 21 7 21C8.66 21 10 19.66 10 18H14C14 19.66 15.34 21 17 21C18.66 21 20 19.66 20 18H23V11.32C23 11.11 22.97 10.9 22.9 10.69ZM14 7H19.56L20.89 11H14V7ZM7 19C6.45 19 6 18.55 6 18C6 17.45 6.45 17 7 17C7.55 17 8 17.45 8 18C8 18.55 7.55 19 7 19ZM12 16H9.22C8.67 15.39 7.89 15 7 15C6.11 15 5.33 15.39 4.78 16H3V13H12V16ZM17 19C16.45 19 16 18.55 16 18C16 17.45 16.45 17 17 17C17.55 17 18 17.45 18 18C18 18.55 17.55 19 17 19ZM19.22 16C18.67 15.39 17.88 15 17 15C16.12 15 15.33 15.39 14.78 16H14V13H21V16H19.22Z" />
      <Path d="M11 8.5H10V6.5H11V5H1V6.5H2V8.5H1V10H11V8.5ZM8.5 8.5H6.75V6.5H8.5V8.5ZM3.5 6.5H5.25V8.5H3.5V6.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FireTruck'

/**
 * Material Icon: Fire Truck
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fire_truck Material Icon Docs}
 */
export const FireTruck = memo(Icon)
