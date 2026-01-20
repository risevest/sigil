import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Polaroid2Line = /* @__PURE__ */ memo(function Polaroid2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M19 15V5H5v10zM3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8M6 6h2v2H6zm0 11v2h12v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Polaroid 2 Line
 * @see {@link https://remixicon.com/icon/polaroid-2-line Remix Icon Docs}
 */
export { Polaroid2Line }
