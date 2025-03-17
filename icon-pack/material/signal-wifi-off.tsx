import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M23.64 7.59527C23.19 7.25527 18.71 3.59527 12 3.59527C10.68 3.59527 9.45 3.73527 8.31 3.97527L18.43 14.0953L23.64 7.59527ZM3.41 1.90527L2 3.31527L4.05 5.36527C1.91 6.35527 0.590001 7.41527 0.360001 7.59527L12 22.0953L15.91 17.2253L19.23 20.5453L20.64 19.1353L3.41 1.90527Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalWifiOff'

/**
 * Material Icon: Signal Wifi Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_wifi_off Material Icon Docs}
 */
export const SignalWifiOff = memo(Icon)
