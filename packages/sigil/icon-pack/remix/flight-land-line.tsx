import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FlightLandLine = /* @__PURE__ */ memo(function FlightLandLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20.949 14.888a1.5 1.5 0 0 1-1.837 1.06L3.445 11.752a1 1 0 0 1-.74-.983l.09-5.403 1.449.388.915 3.351 5.095 1.366-.37-8.382 1.933.518 2.81 9.035 5.261 1.41a1.5 1.5 0 0 1 1.061 1.837M4 19h16v2H4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Flight Land Line
 * @see {@link https://remixicon.com/icon/flight-land-line Remix Icon Docs}
 */
export { FlightLandLine }
