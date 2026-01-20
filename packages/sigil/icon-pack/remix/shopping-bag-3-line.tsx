import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ShoppingBag3Line = /* @__PURE__ */ memo(function ShoppingBag3Line(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.505 2h11a1 1 0 0 1 .8.4l2.7 3.6v15a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4m12.5 6h-14v12h14zm-.5-2-1.5-2h-10l-1.5 2zm-9.5 4v2a3 3 0 1 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Shopping Bag 3 Line
 * @see {@link https://remixicon.com/icon/shopping-bag-3-line Remix Icon Docs}
 */
export { ShoppingBag3Line }
