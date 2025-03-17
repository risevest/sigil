import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5 8.7C17.04 10.2 14 12.87 13.5 17H15.5V19H9.5V17H11.5C11 12.5 7.13 9 2.5 9V7C6.89 7 10.72 9.55 12.5 13.3C13.88 10.33 16.36 8.27 18.46 6.99L14.5 7V5H21.5V12H19.5V8.7Z" />
    </Svg>
  )
}

Icon.displayName = 'AirlineStops'

/**
 * Material Icon: Airline Stops
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airline_stops Material Icon Docs}
 */
export const AirlineStops = memo(Icon)
