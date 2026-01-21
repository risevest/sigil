import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LayoutTopFill = /* @__PURE__ */ memo(function LayoutTopFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 10v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10zm-1-7a1 1 0 0 1 1 1v4H2V4a1 1 0 0 1 1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout Top Fill
 * @see {@link https://remixicon.com/icon/layout-top-fill Remix Icon Docs}
 */
export { LayoutTopFill }
