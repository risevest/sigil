import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m3.005 7 8.445-5.63a1 1 0 0 1 1.11 0L21.005 7v14a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1zm9 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-4 5v2h8v-2zm0-3v2h8v-2z" />
    </Svg>
  )
})
Icon.displayName = 'PriceTag2Fill'
/**
 * Remix Icon: Price Tag 2 Fill
 * @see {@link https://remixicon.com/icon/price-tag-2-fill Remix Icon Docs}
 */
export const PriceTag2Fill = Icon
