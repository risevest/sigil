import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MenuFill = /* @__PURE__ */ memo(function MenuFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Menu Fill
 * @see {@link https://remixicon.com/icon/menu-fill Remix Icon Docs}
 */
export { MenuFill }
