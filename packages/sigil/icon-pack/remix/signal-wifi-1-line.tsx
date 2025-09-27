import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.93 17.93 0 0 1 12 3m0 12c-.693 0-1.367.117-2 .34l2 2.477 2-2.477a6 6 0 0 0-2-.34m0-10c-3.027 0-5.922.842-8.42 2.392l5.109 6.324A8 8 0 0 1 12 13c1.18 0 2.302.256 3.311.716L20.42 7.39A15.9 15.9 0 0 0 12 5" />
    </Svg>
  )
})
Icon.displayName = 'SignalWifi1Line'
/**
 * Remix Icon: Signal Wifi 1 Line
 * @see {@link https://remixicon.com/icon/signal-wifi-1-line Remix Icon Docs}
 */
export const SignalWifi1Line = Icon
