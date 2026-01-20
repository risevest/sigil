import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MenuFold2Fill = /* @__PURE__ */ memo(function MenuFold2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4 3.5 5 5-5 5zM21 20v-2H3v2zm0-7v-2h-9v2zm0-7V4h-9v2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Menu Fold 2 Fill
 * @see {@link https://remixicon.com/icon/menu-fold-2-fill Remix Icon Docs}
 */
export { MenuFold2Fill }
