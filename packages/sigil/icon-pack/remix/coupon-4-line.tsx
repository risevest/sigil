import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Coupon4Line = /* @__PURE__ */ memo(function Coupon4Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10.005 21h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7a2 2 0 1 0 4 0h7a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-7a2 2 0 1 0-4 0M8.54 19a4 4 0 0 1 3.465-2c1.48 0 2.773.804 3.465 2h4.535V5H15.47a4 4 0 0 1-3.465 2A4 4 0 0 1 8.54 5H4.005v14zM6.005 8h2v8h-2zm10 0h2v8h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Coupon 4 Line
 * @see {@link https://remixicon.com/icon/coupon-4-line Remix Icon Docs}
 */
export { Coupon4Line }
