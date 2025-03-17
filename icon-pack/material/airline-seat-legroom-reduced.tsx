import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.4712 19.2C20.6512 20.16 19.9212 21 19.0012 21H14.5012V18L15.5012 14H9.50122C7.85122 14 6.50122 12.65 6.50122 11V3H12.5012V9H17.5012C18.6012 9 19.5012 9.9 19.5012 11L17.5012 18H18.9412C19.6712 18 20.3312 18.49 20.4712 19.2ZM5.50122 12V3H3.50122V12C3.50122 14.76 5.74122 17 8.50122 17H12.5012V15H8.50122C6.84122 15 5.50122 13.66 5.50122 12Z" />
    </Svg>
  )
}

Icon.displayName = 'AirlineSeatLegroomReduced'

/**
 * Material Icon: Airline Seat Legroom Reduced
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:airline_seat_legroom_reduced Material Icon Docs}
 */
export const AirlineSeatLegroomReduced = memo(Icon)
