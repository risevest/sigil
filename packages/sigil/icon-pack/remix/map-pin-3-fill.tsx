import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MapPin3Fill = /* @__PURE__ */ memo(function MapPin3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 19.945A9.001 9.001 0 0 1 12 2a9 9 0 0 1 1 17.945V24h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Map Pin 3 Fill
 * @see {@link https://remixicon.com/icon/map-pin-3-fill Remix Icon Docs}
 */
export { MapPin3Fill }
