import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.5 19.5H21.5V21.5H2.5V19.5ZM19.34 16.35C20.14 16.56 20.96 16.09 21.18 15.29C21.39 14.49 20.92 13.67 20.12 13.45L14.81 12.03L12.05 3.01L10.12 2.5V10.78L5.15 9.45L4.22 7.13L2.77 6.74V11.91L19.34 16.35Z" />
    </Svg>
  )
}

Icon.displayName = 'FlightLand'

/**
 * Material Icon: Flight Land
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flight_land Material Icon Docs}
 */
export const FlightLand = memo(Icon)
