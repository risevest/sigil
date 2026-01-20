import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MenuFoldLine = /* @__PURE__ */ memo(function MenuFoldLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 18v2H3v-2zM6.596 3.903 8.01 5.318 4.828 8.5l3.182 3.182-1.414 1.414L2 8.5zM21 11v2h-9v-2zm0-7v2h-9V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Menu Fold Line
 * @see {@link https://remixicon.com/icon/menu-fold-line Remix Icon Docs}
 */
export { MenuFoldLine }
