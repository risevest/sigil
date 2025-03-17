import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M24 8.48C20.93 5.4 16.69 3.5 12 3.5C7.31 3.5 3.07 5.4 0 8.48L12 20.5V11.5H20.99L24 8.48ZM19.59 13.5L17.5 15.59L15.41 13.5L14 14.91L16.09 17L14 19.09L15.41 20.5L17.5 18.42L19.59 20.5L21 19.09L18.92 17L21 14.91L19.59 13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalWifiConnectedNoInternet4'

/**
 * Material Icon: Signal Wifi Connected No Internet 4
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_wifi_connected_no_internet_4 Material Icon Docs}
 */
export const SignalWifiConnectedNoInternet4 = memo(Icon)
