import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MenuFold3Line = /* @__PURE__ */ memo(function MenuFold3Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 4H7v2h14zm0 7H11v2h10zm0 7H7v2h14zM9.01 8.814 7.596 7.4 3 11.996l4.596 4.596 1.414-1.414-3.182-3.182z" />
    </Svg>
  )
})
/**
 * Remix Icon: Menu Fold 3 Line
 * @see {@link https://remixicon.com/icon/menu-fold-3-line Remix Icon Docs}
 */
export { MenuFold3Line }
