import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LayoutFill = /* @__PURE__ */ memo(function LayoutFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 21V10h5v10a1 1 0 0 1-1 1zm-2 0H4a1 1 0 0 1-1-1V10h11zm7-13H3V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Layout Fill
 * @see {@link https://remixicon.com/icon/layout-fill Remix Icon Docs}
 */
export { LayoutFill }
