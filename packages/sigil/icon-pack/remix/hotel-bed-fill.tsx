import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 11v9h-2v-3H4v3H2V4h2v10h8V7h6a4 4 0 0 1 4 4M8 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </Svg>
  )
})
Icon.displayName = 'HotelBedFill'
/**
 * Remix Icon: Hotel Bed Fill
 * @see {@link https://remixicon.com/icon/hotel-bed-fill Remix Icon Docs}
 */
export const HotelBedFill = Icon
