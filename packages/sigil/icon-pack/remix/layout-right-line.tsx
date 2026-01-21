import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LayoutRightLine = /* @__PURE__ */ memo(function LayoutRightLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-6 2H4v14h11zm5 0h-3v14h3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout Right Line
 * @see {@link https://remixicon.com/icon/layout-right-line Remix Icon Docs}
 */
export { LayoutRightLine }
