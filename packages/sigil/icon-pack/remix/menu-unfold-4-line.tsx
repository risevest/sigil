import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MenuUnfold4Line = /* @__PURE__ */ memo(function MenuUnfold4Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 4H3v2h14zm-4 7H3v2h10zm4 7H3v2h14zm5.01-9.186L20.596 7.4 16 11.996l4.596 4.596 1.414-1.414-3.182-3.182z" />
    </Svg>
  )
})
/**
 * Remix Icon: Menu Unfold 4 Line
 * @see {@link https://remixicon.com/icon/menu-unfold-4-line Remix Icon Docs}
 */
export { MenuUnfold4Line }
