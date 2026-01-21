import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SignalWifiOffFill = /* @__PURE__ */ memo(function SignalWifiOffFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m2.808 1.393 17.678 17.678-1.414 1.414-3.683-3.683L12 21 .69 6.997c.914-.74 1.902-1.391 2.951-1.942L1.394 2.808zM12.001 3c4.284 0 8.219 1.497 11.31 3.996l-5.407 6.693L7.725 3.511C9.095 3.177 10.527 3 12.001 3" />
    </Svg>
  )
})
/**
 * Remix Icon: Signal Wifi Off Fill
 * @see {@link https://remixicon.com/icon/signal-wifi-off-fill Remix Icon Docs}
 */
export { SignalWifiOffFill }
