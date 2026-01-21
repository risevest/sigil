import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SignalWifiFill = /* @__PURE__ */ memo(function SignalWifiFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.93 17.93 0 0 1 12 3" />
    </Svg>
  )
})
/**
 * Remix Icon: Signal Wifi Fill
 * @see {@link https://remixicon.com/icon/signal-wifi-fill Remix Icon Docs}
 */
export { SignalWifiFill }
