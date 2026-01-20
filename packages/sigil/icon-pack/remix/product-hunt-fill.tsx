import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ProductHuntFill = /* @__PURE__ */ memo(function ProductHuntFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m1.334-10H10.5V9h2.834a1.5 1.5 0 0 1 0 3m0-5H8.5v10h2v-3h2.834a3.5 3.5 0 1 0 0-7" />
    </Svg>
  )
})
/**
 * Remix Icon: Product Hunt Fill
 * @see {@link https://remixicon.com/icon/product-hunt-fill Remix Icon Docs}
 */
export { ProductHuntFill }
