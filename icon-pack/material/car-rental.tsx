import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 18C9.55228 18 10 17.5523 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18Z" />
      <Path d="M15 18C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18Z" />
      <Path d="M17.25 10.1C17.23 10.08 17.22 10.06 17.2 10.03C16.82 9.51 16.28 9.5 16.28 9.5H7.72C7.72 9.5 7.18 9.51 6.8 10.04C6.78 10.06 6.77 10.08 6.75 10.1C6.68 10.21 6.61 10.34 6.56 10.5C6.34 11.16 5.82 12.72 5 15.19V21.69C5 22.14 5.35 22.5 5.78 22.5H6.22C6.65 22.5 7 22.14 7 21.69V20.5H17V21.69C17 22.14 17.34 22.5 17.78 22.5H18.22C18.65 22.5 19 22.14 19 21.69V15.19C18.18 12.73 17.66 11.16 17.44 10.5C17.39 10.34 17.32 10.21 17.25 10.1ZM8.33 11.5H15.67L15.9 12.19L16.33 13.5H7.67L8.33 11.5ZM17 18.5H7V15.5H17V18.5Z" />
      <Path d="M10.83 3.5C10.41 2.33 9.3 1.5 8 1.5C6.34 1.5 5 2.84 5 4.5C5 6.15 6.34 7.5 8 7.5C9.3 7.5 10.41 6.66 10.83 5.5H16V7.5H18V5.5H19V3.5H10.83ZM8 5.5C7.45 5.5 7 5.05 7 4.5C7 3.95 7.45 3.5 8 3.5C8.55 3.5 9 3.95 9 4.5C9 5.05 8.55 5.5 8 5.5Z" />
    </Svg>
  )
}

Icon.displayName = 'CarRental'

/**
 * Material Icon: Car Rental
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:car_rental Material Icon Docs}
 */
export const CarRental = memo(Icon)
