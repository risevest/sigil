import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShoppingCart2Fill = /* @__PURE__ */ memo(function ShoppingCart2Fill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.004 6.417.762 3.174 2.176 1.76l3.243 3.243H20.66a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6.004v2h11v2h-12a1 1 0 0 1-1-1zm1.5 16.586a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </Svg>
  )
})
/**
 * Remix Icon: Shopping Cart 2 Fill
 * @see {@link https://remixicon.com/icon/shopping-cart-2-fill Remix Icon Docs}
 */
export { ShoppingCart2Fill }
