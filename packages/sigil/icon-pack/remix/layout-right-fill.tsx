import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LayoutRightFill = /* @__PURE__ */ memo(function LayoutRightFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zm-6 18H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout Right Fill
 * @see {@link https://remixicon.com/icon/layout-right-fill Remix Icon Docs}
 */
export { LayoutRightFill }
