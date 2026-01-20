import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MenuFold3Fill = /* @__PURE__ */ memo(function MenuFold3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 4H7v2h14zm0 7H11v2h10zm0 7H7v2h14zM8 17V7l-5 5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Menu Fold 3 Fill
 * @see {@link https://remixicon.com/icon/menu-fold-3-fill Remix Icon Docs}
 */
export { MenuFold3Fill }
