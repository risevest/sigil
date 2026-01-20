import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LayoutMasonryFill = /* @__PURE__ */ memo(function LayoutMasonryFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 9.999V20a1 1 0 0 1-1 1h-8V9.999zm-11 6V21H3a1 1 0 0 1-1-1v-4.001zM11 3v10.999H2V4a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3.999h-9V3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout Masonry Fill
 * @see {@link https://remixicon.com/icon/layout-masonry-fill Remix Icon Docs}
 */
export { LayoutMasonryFill }
