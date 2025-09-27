import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14.005 3v18h-11a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1zm2 0h5a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-5z" />
    </Svg>
  )
})
Icon.displayName = 'Coupon2Fill'
/**
 * Remix Icon: Coupon 2 Fill
 * @see {@link https://remixicon.com/icon/coupon-2-fill Remix Icon Docs}
 */
export const Coupon2Fill = Icon
