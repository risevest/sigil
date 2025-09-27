import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.005 9.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5m7-.5v2h6V9zm0 4v2h6v-2z" />
    </Svg>
  )
})
Icon.displayName = 'CouponFill'
/**
 * Remix Icon: Coupon Fill
 * @see {@link https://remixicon.com/icon/coupon-fill Remix Icon Docs}
 */
export const CouponFill = Icon
