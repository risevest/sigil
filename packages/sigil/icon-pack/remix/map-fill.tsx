import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MapFill = /* @__PURE__ */ memo(function MapFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m2 5 7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46z" />
    </Svg>
  )
})
/**
 * Remix Icon: Map Fill
 * @see {@link https://remixicon.com/icon/map-fill Remix Icon Docs}
 */
export { MapFill }
