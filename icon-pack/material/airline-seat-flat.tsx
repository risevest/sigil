import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 12.5C5.78 12.5 6.55 12.2 7.14 11.6C8.3 10.41 8.28 8.52 7.1 7.36C6.51 6.79 5.75 6.5 5 6.5C4.22 6.5 3.45 6.8 2.86 7.4C1.7 8.59 1.72 10.48 2.9 11.64C3.49 12.21 4.25 12.5 5 12.5ZM4.29 8.8C4.48 8.61 4.73 8.5 5 8.5C5.26 8.5 5.51 8.6 5.7 8.78C6.1 9.17 6.1 9.79 5.72 10.19C5.52 10.39 5.27 10.5 5 10.5C4.74 10.5 4.49 10.4 4.3 10.22C3.9 9.82 3.9 9.2 4.29 8.8ZM18 6.5H9V12.5H22V10.5C22 8.29 20.21 6.5 18 6.5ZM11 10.5V8.5H18C19.1 8.5 20 9.4 20 10.5H11ZM2 15.5H8V17.5H16V15.5H22V13.5H2V15.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AirlineSeatFlat'

/**
 * Material Icon: Airline Seat Flat
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airline_seat_flat Material Icon Docs}
 */
export const AirlineSeatFlat = memo(Icon)
