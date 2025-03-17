import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2.52011 18.7152H21.5201V20.7152H2.52011V18.7152ZM22.0901 9.35516C21.8801 8.55516 21.0501 8.07516 20.2501 8.29516L14.9401 9.71516L8.04011 3.28516L6.11011 3.79516L10.2501 10.9652L5.28011 12.2952L3.31011 10.7552L1.86011 11.1452L4.45011 15.6352L21.0201 11.2052C21.8301 10.9752 22.3001 10.1552 22.0901 9.35516Z" />
    </Svg>
  )
}

Icon.displayName = 'FlightTakeoff'

/**
 * Material Icon: Flight Takeoff
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:flight_takeoff Material Icon Docs}
 */
export const FlightTakeoff = memo(Icon)
