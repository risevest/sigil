import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PriceTagLine = /* @__PURE__ */ memo(function PriceTagLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m3.005 7 8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm2 1.07V20h14V8.07l-7-4.667zm7 2.93a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Price Tag Line
 * @see {@link https://remixicon.com/icon/price-tag-line Remix Icon Docs}
 */
export { PriceTagLine }
