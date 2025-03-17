import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.19 4H4C2.9 4 2.01 4.9 2.01 6V10C3.11 10 4 10.9 4 12C4 13.1 3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.19 4 20.19 4ZM20 18H4V15.46C5.19 14.77 6 13.47 6 12C6 10.52 5.2 9.23 4.01 8.54L4 6H20V18ZM8.87 15.66L7.21 12.78L8.14 12.53L9.4 13.52L11.79 12.88L9.39 8.72L10.79 8.34L14.8 12.08L17.24 11.43C17.75 11.29 18.28 11.6 18.42 12.11C18.55 12.62 18.25 13.15 17.73 13.3L8.87 15.66Z" />
    </Svg>
  )
}

Icon.displayName = 'AirplaneTicket'

/**
 * Material Icon: Airplane Ticket
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airplane_ticket Material Icon Docs}
 */
export const AirplaneTicket = memo(Icon)
