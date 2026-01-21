import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MenuSearchFill = /* @__PURE__ */ memo(function MenuSearchFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.618 13.032a5.5 5.5 0 1 1 1.414-1.414l2.675 2.675-1.414 1.414zM3 4h5v2H3zm0 7h5v2H3zm0 7h18v2H3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Menu Search Fill
 * @see {@link https://remixicon.com/icon/menu-search-fill Remix Icon Docs}
 */
export { MenuSearchFill }
