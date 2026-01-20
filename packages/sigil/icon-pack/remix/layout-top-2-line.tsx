import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LayoutTop2Line = /* @__PURE__ */ memo(function LayoutTop2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H4v14h16zm-2 2v2H6V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout Top 2 Line
 * @see {@link https://remixicon.com/icon/layout-top-2-line Remix Icon Docs}
 */
export { LayoutTop2Line }
