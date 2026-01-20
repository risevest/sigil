import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShoppingBasketLine = /* @__PURE__ */ memo(function ShoppingBasketLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.925a1 1 0 0 1-.997-.917L3.171 11H2.005V9h4V8a6 6 0 0 1 6-6m6.826 9H5.178l.667 8h12.319zm-5.826 2v4h-2v-4zm-4 0v4h-2v-4zm8 0v4h-2v-4zm-5-9A4 4 0 0 0 8.01 7.8l-.005.2v1h8V8a4 4 0 0 0-3.8-3.995z" />
    </Svg>
  )
})
/**
 * Remix Icon: Shopping Basket Line
 * @see {@link https://remixicon.com/icon/shopping-basket-line Remix Icon Docs}
 */
export { ShoppingBasketLine }
