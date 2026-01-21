import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const OrderPlayFill = /* @__PURE__ */ memo(function OrderPlayFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 4V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H2V4zM2 18h20v2H2zm0-7h20v2H2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Order Play Fill
 * @see {@link https://remixicon.com/icon/order-play-fill Remix Icon Docs}
 */
export { OrderPlayFill }
