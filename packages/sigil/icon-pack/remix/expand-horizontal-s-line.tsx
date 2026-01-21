import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExpandHorizontalSLine = /* @__PURE__ */ memo(function ExpandHorizontalSLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.45 7.05 2.5 12l4.947 4.947 1.414-1.414L6.328 13h11.343l-2.535 2.535 1.414 1.414L21.5 12l-4.95-4.95-1.414 1.415L17.672 11H6.328l2.536-2.535z" />
    </Svg>
  )
})
/**
 * Remix Icon: Expand Horizontal S Line
 * @see {@link https://remixicon.com/icon/expand-horizontal-s-line Remix Icon Docs}
 */
export { ExpandHorizontalSLine }
