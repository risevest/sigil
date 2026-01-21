import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LayoutGridLine = /* @__PURE__ */ memo(function LayoutGridLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM11 13H4v6h7zm9 0h-7v6h7zm-9-8H4v6h7zm9 0h-7v6h7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout Grid Line
 * @see {@link https://remixicon.com/icon/layout-grid-line Remix Icon Docs}
 */
export { LayoutGridLine }
