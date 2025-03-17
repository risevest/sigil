import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5 11L11.5 17V13H9.5L12.5 7V11H14.5ZM17 3H7V4H17V3ZM17 20H7V21H17V20ZM17 1C18.1 1 19 1.9 19 3V21C19 22.1 18.1 23 17 23H7C5.9 23 5 22.1 5 21V3C5 1.9 5.9 1 7 1H17ZM7 18H17V6H7V18Z" />
    </Svg>
  )
}

Icon.displayName = 'ChargingStation'

/**
 * Material Icon: Charging Station
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:charging_station Material Icon Docs}
 */
export const ChargingStation = memo(Icon)
