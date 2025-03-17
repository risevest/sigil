import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.01 21.24L23.64 6.75C23.19 6.41 18.71 2.75 12 2.75C5.27999 2.75 0.809985 6.41 0.359985 6.75L11.99 21.24L12 21.25L12.01 21.24Z" />
    </Svg>
  )
}

Icon.displayName = 'SignalWifi4Bar'

/**
 * Material Icon: Signal Wifi 4 Bar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:signal_wifi_4_bar Material Icon Docs}
 */
export const SignalWifi4Bar = memo(Icon)
