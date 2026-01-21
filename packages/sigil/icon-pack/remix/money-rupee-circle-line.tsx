import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MoneyRupeeCircleLine = /* @__PURE__ */ memo(function MoneyRupeeCircleLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0m2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8.5-4c.328.436.563.946.675 1.5H16V11h-1.825a3.75 3.75 0 0 1-3.675 3h-.19l3.72 3.72-1.06 1.06L8 13.81V12.5h2.5c.98 0 1.813-.626 2.122-1.5H8V9.5h4.622A2.25 2.25 0 0 0 10.5 8H8V6.5h8V8z" />
    </Svg>
  )
})
/**
 * Remix Icon: Money Rupee Circle Line
 * @see {@link https://remixicon.com/icon/money-rupee-circle-line Remix Icon Docs}
 */
export { MoneyRupeeCircleLine }
