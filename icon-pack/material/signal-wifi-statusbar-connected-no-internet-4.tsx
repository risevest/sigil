import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.54 3.5C7.84999 3.5 3.60999 5.4 0.539993 8.48L12.54 20.5L17.54 15.49V7.5H23.46C20.51 5.01 16.7 3.5 12.54 3.5Z" />
      <Path d="M21.54 17.5H19.54V19.5H21.54V17.5Z" />
      <Path d="M21.54 9.5H19.54V15.5H21.54V9.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalWifiStatusbarConnectedNoInternet4'

/**
 * Material Icon: Signal Wifi Statusbar Connected No Internet 4
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_wifi_statusbar_connected_no_internet_4 Material Icon Docs}
 */
export const SignalWifiStatusbarConnectedNoInternet4 = memo(Icon)
