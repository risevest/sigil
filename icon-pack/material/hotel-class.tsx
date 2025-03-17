import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.66 8.89L11.6 12H14.42L12.15 13.62L13.08 16.63L10.66 14.79L8.24003 16.63L9.17003 13.62L6.90003 12H9.72003L10.66 8.89ZM8.24003 10H0.660034L6.83003 14.41L4.49003 22L10.66 17.31L16.84 22L14.49 14.41L20.66 10H13.08L10.66 2L8.24003 10ZM21.02 22L19.16 15.99L23.34 13H19.9L16.82 15.2L18.28 19.92L21.02 22ZM16.66 8L14.84 2L13.8 5.45L14.57 8H16.66Z" />
    </Svg>
  )
}

Icon.displayName = 'HotelClass'

/**
 * Material Icon: Hotel Class
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hotel_class Material Icon Docs}
 */
export const HotelClass = memo(Icon)
