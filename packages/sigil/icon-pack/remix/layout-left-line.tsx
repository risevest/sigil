import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LayoutLeftLine = /* @__PURE__ */ memo(function LayoutLeftLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM7 5H4v14h3zm13 0H9v14h11z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout Left Line
 * @see {@link https://remixicon.com/icon/layout-left-line Remix Icon Docs}
 */
export { LayoutLeftLine }
