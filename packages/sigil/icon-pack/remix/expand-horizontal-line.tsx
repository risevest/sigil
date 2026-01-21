import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExpandHorizontalLine = /* @__PURE__ */ memo(function ExpandHorizontalLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m.5 12 4.95-4.95 1.414 1.415L4.328 11H10v2H4.328l2.533 2.533-1.414 1.414zM14 13h5.67l-2.534 2.535 1.414 1.414L23.5 12l-4.95-4.95-1.414 1.415L19.672 11H14z" />
    </Svg>
  )
})
/**
 * Remix Icon: Expand Horizontal Line
 * @see {@link https://remixicon.com/icon/expand-horizontal-line Remix Icon Docs}
 */
export { ExpandHorizontalLine }
