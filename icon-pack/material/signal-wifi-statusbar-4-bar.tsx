import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 3.5C7.31 3.5 3.07 5.4 0 8.48L12 20.5L24 8.48C20.93 5.4 16.69 3.5 12 3.5Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalWifiStatusbar4Bar'

/**
 * Material Icon: Signal Wifi Statusbar 4 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_wifi_statusbar_4_bar Material Icon Docs}
 */
export const SignalWifiStatusbar4Bar = memo(Icon)
