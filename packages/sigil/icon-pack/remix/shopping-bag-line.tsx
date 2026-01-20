import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShoppingBagLine = /* @__PURE__ */ memo(function ShoppingBagLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7.005 8V6a5 5 0 0 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm0 2h-2v10h14V10h-2v2h-2v-2h-6v2h-2zm2-2h6V6a3 3 0 0 0-6 0z" />
    </Svg>
  )
})
/**
 * Remix Icon: Shopping Bag Line
 * @see {@link https://remixicon.com/icon/shopping-bag-line Remix Icon Docs}
 */
export { ShoppingBagLine }
