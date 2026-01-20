import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShoppingBag2Line = /* @__PURE__ */ memo(function ShoppingBag2Line(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20.005 22h-16a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4h-14v16zm-10-14v2a3 3 0 1 0 6 0V6h2v2a5 5 0 0 1-10 0V6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Shopping Bag 2 Line
 * @see {@link https://remixicon.com/icon/shopping-bag-2-line Remix Icon Docs}
 */
export { ShoppingBag2Line }
