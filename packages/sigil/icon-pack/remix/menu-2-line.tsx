import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Menu2Line = /* @__PURE__ */ memo(function Menu2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Menu 2 Line
 * @see {@link https://remixicon.com/icon/menu-2-line Remix Icon Docs}
 */
export { Menu2Line }
