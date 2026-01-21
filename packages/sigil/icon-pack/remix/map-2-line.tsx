import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Map2Line = /* @__PURE__ */ memo(function Map2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m2 5 7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46zm14 14.395 4-1.714V5.033l-4 1.714zm-2-.131V6.736l-4-2v12.528zm-6-2.011V4.605L4 6.319v12.648z" />
    </Svg>
  )
})
/**
 * Remix Icon: Map 2 Line
 * @see {@link https://remixicon.com/icon/map-2-line Remix Icon Docs}
 */
export { Map2Line }
