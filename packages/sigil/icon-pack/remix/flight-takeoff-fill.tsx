import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FlightTakeoffFill = /* @__PURE__ */ memo(function FlightTakeoffFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21.949 10.112a1.5 1.5 0 0 1-1.06 1.837L5.221 16.147a1 1 0 0 1-1.133-.48l-2.623-4.725 1.449-.389 2.468 2.445 5.095-1.365-4.51-7.074 1.931-.518 6.952 6.42 5.26-1.41a1.5 1.5 0 0 1 1.838 1.06M4 19h16v2H4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Flight Takeoff Fill
 * @see {@link https://remixicon.com/icon/flight-takeoff-fill Remix Icon Docs}
 */
export { FlightTakeoffFill }
