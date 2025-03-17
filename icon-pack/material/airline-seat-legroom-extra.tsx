import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.49951 12V3H1.49951V12C1.49951 14.76 3.73951 17 6.49951 17H12.4995V15H6.49951C4.83951 15 3.49951 13.66 3.49951 12ZM22.3295 17.24C21.9495 16.52 21.0395 16.27 20.2995 16.61L19.2095 17.11L15.7995 10.13C15.4595 9.45 14.7695 9 14.0095 9H10.4995V3H4.49951V11C4.49951 12.66 5.83951 14 7.49951 14H14.4995L17.9095 21L21.6295 19.3C22.3995 18.94 22.7295 18 22.3295 17.24Z" />
    </Svg>
  )
}

Icon.displayName = 'AirlineSeatLegroomExtra'

/**
 * Material Icon: Airline Seat Legroom Extra
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airline_seat_legroom_extra Material Icon Docs}
 */
export const AirlineSeatLegroomExtra = memo(Icon)
