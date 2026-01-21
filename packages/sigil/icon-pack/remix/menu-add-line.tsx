import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MenuAddLine = /* @__PURE__ */ memo(function MenuAddLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m18 15-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15zm-7 3v2H3v-2zm10-7v2H3v-2zm0-7v2H3V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Menu Add Line
 * @see {@link https://remixicon.com/icon/menu-add-line Remix Icon Docs}
 */
export { MenuAddLine }
