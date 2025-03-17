import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.5 12V3H2.5V12C2.5 14.76 4.74 17 7.5 17H13.5V15H7.5C5.84 15 4.5 13.66 4.5 12ZM20 18H18.5V11C18.5 9.9 17.6 9 16.5 9H11.5V3H5.5V11C5.5 12.65 6.85 14 8.5 14H15.5V21H20C20.83 21 21.5 20.33 21.5 19.5C21.5 18.67 20.83 18 20 18Z" />
    </Svg>
  )
}

Icon.displayName = 'AirlineSeatLegroomNormal'

/**
 * Material Icon: Airline Seat Legroom Normal
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airline_seat_legroom_normal Material Icon Docs}
 */
export const AirlineSeatLegroomNormal = memo(Icon)
