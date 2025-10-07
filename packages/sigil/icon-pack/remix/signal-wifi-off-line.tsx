import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m2.808 1.393 17.678 17.678-1.414 1.414-3.683-3.682L12 21 .69 6.997c.914-.74 1.902-1.391 2.951-1.942L1.394 2.808zm.772 5.999L12 17.817l1.967-2.437-8.835-8.836q-.799.38-1.552.848M12 3c4.285 0 8.22 1.497 11.31 3.996l-5.406 6.693-1.422-1.422 3.938-4.876A15.9 15.9 0 0 0 12 5q-1.31 0-2.579.207L7.725 3.51C9.095 3.177 10.527 3 12.001 3" />
    </Svg>
  )
})
Icon.displayName = 'SignalWifiOffLine'
/**
 * Remix Icon: Signal Wifi Off Line
 * @see {@link https://remixicon.com/icon/signal-wifi-off-line Remix Icon Docs}
 */
export const SignalWifiOffLine = Icon
