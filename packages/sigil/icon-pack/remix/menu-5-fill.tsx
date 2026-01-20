import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Menu5Fill = /* @__PURE__ */ memo(function Menu5Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18 18v2H6v-2zm3-7v2H3v-2zm-3-7v2H6V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Menu 5 Fill
 * @see {@link https://remixicon.com/icon/menu-5-fill Remix Icon Docs}
 */
export { Menu5Fill }
