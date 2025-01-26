import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.92887 4.92883L5.34315 6.3431C3.89543 7.79082 3 9.79082 3 12C3 14.2091 3.89543 16.2091 5.34315 17.6568L3.92887 19.0711C2.11925 17.2615 1 14.7615 1 12C1 9.23846 2.11925 6.73846 3.92887 4.92883ZM20.0711 4.92883C21.8808 6.73846 23 9.23846 23 12C23 14.7615 21.8808 17.2615 20.0711 19.0711L18.6569 17.6568C20.1046 16.2091 21 14.2091 21 12C21 9.79133 20.105 7.79174 18.6579 6.3441L20.0711 4.92883ZM13 4.99996V11H16L11 19V13H8L13 4.99996ZM6.75736 7.75732L8.17157 9.17153C7.44771 9.89539 7 10.8954 7 12C7 13.1045 7.44771 14.1045 8.17157 14.8284L6.75736 16.2426C5.67157 15.1568 5 13.6568 5 12C5 10.3431 5.67157 8.8431 6.75736 7.75732ZM17.2436 7.7583C18.3288 8.84401 19 10.3436 19 12C19 13.6568 18.3284 15.1568 17.2426 16.2426L15.8284 14.8284C16.5523 14.1045 17 13.1045 17 12C17 10.8959 16.5527 9.89631 15.8294 9.17253L17.2436 7.7583Z" />
    </Svg>
  )
}

Icon.displayName = 'WirelessChargingFill'

/**
 * Remix Icon: Wireless Charging Fill
 * @see {@link https://remixicon.com/icon/wireless-charging-fill Remix Icon Docs}
 */
export const WirelessChargingFill = memo(Icon)