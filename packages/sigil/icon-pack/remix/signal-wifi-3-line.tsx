import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.93 17.93 0 0 1 12 3m0 7c-1.897 0-3.683.48-5.24 1.327l5.24 6.49 5.242-6.49A10.95 10.95 0 0 0 12 10m0-5c-3.027 0-5.922.842-8.42 2.392l1.904 2.357A12.94 12.94 0 0 1 12.001 8c2.374 0 4.6.637 6.516 1.749L20.42 7.39A15.9 15.9 0 0 0 12 5" />
    </Svg>
  )
})
Icon.displayName = 'SignalWifi3Line'
/**
 * Remix Icon: Signal Wifi 3 Line
 * @see {@link https://remixicon.com/icon/signal-wifi-3-line Remix Icon Docs}
 */
export const SignalWifi3Line = Icon
