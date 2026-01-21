import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MenuUnfold3Fill = /* @__PURE__ */ memo(function MenuUnfold3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 4H3v2h14zm-4 7H3v2h10zm4 7H3v2h14zm0-1V7l5 5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Menu Unfold 3 Fill
 * @see {@link https://remixicon.com/icon/menu-unfold-3-fill Remix Icon Docs}
 */
export { MenuUnfold3Fill }
