import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MapPin5Line = /* @__PURE__ */ memo(function MapPin5Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 18.485 4.243-4.242a6 6 0 1 0-8.486 0zm5.657-2.828L12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0M5 22h14v2H5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Map Pin 5 Line
 * @see {@link https://remixicon.com/icon/map-pin-5-line Remix Icon Docs}
 */
export { MapPin5Line }
