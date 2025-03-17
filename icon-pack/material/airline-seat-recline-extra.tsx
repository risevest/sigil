import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5.35 6.13938C4.45 5.49938 4.23 4.25938 4.86 3.34938C5.49 2.44938 6.74 2.22938 7.65 2.85938C8.55 3.49938 8.77 4.73938 8.14 5.64938C7.5 6.54938 6.26 6.76938 5.35 6.13938ZM16 19.4994H8.93C7.45 19.4994 6.19 18.4194 5.97 16.9594L4 7.49938H2L3.99 17.2594C4.37 19.6994 6.47 21.4994 8.94 21.4994H16V19.4994ZM16.23 15.4994H11.35L10.32 11.3994C11.9 12.2894 13.6 12.9394 15.47 12.6194V10.4894C13.84 10.7994 12.03 10.2194 10.78 9.23938L9.14 7.96938C8.91 7.78938 8.65 7.66938 8.38 7.58938C8.06 7.49938 7.72 7.46938 7.39 7.52938H7.37C6.14 7.74938 5.32 8.91938 5.53 10.1394L6.88 16.0594C7.16 17.4794 8.39 18.4994 9.83 18.4994H16.68L20.5 21.4994L22 19.9994L16.23 15.4994Z" />
    </Svg>
  )
}

Icon.displayName = 'AirlineSeatReclineExtra'

/**
 * Material Icon: Airline Seat Recline Extra
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airline_seat_recline_extra Material Icon Docs}
 */
export const AirlineSeatReclineExtra = memo(Icon)
