import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExpandVerticalSLine = /* @__PURE__ */ memo(function ExpandVerticalSLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.95 7.45 12 2.5 7.051 7.447 8.466 8.86 11 6.328V17.67l-2.536-2.535L7.05 16.55 12 21.5l4.95-4.95-1.414-1.414L13 17.672V6.328l2.535 2.535z" />
    </Svg>
  )
})
/**
 * Remix Icon: Expand Vertical S Line
 * @see {@link https://remixicon.com/icon/expand-vertical-s-line Remix Icon Docs}
 */
export { ExpandVerticalSLine }
