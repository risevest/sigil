import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.59 5.66207C6.81 4.88207 6.81 3.61207 7.59 2.83207C8.37 2.05207 9.64 2.05207 10.42 2.83207C11.2 3.61207 11.2 4.88207 10.42 5.66207C9.63 6.45207 8.37 6.45207 7.59 5.66207ZM6 16.2521V7.25207H4V16.2521C4 19.0121 6.24 21.2521 9 21.2521H15V19.2521H9C7.34 19.2521 6 17.9121 6 16.2521ZM20 20.3221L14.93 15.2521H11.5V11.5721C12.9 12.7221 15.1 13.7321 17 13.7321V11.5721C15.34 11.5921 13.39 10.7021 12.33 9.53207L10.93 7.98207C10.74 7.77207 10.5 7.60207 10.24 7.48207C9.95 7.34207 9.62 7.25207 9.28 7.25207H9.25C8.01 7.25207 7 8.26207 7 9.50207V15.2521C7 16.9121 8.34 18.2521 10 18.2521H15.07L18.57 21.7521L20 20.3221Z" />
    </Svg>
  )
}

Icon.displayName = 'AirlineSeatReclineNormal'

/**
 * Material Icon: Airline Seat Recline Normal
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airline_seat_recline_normal Material Icon Docs}
 */
export const AirlineSeatReclineNormal = memo(Icon)
