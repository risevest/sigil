import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 0 1 .988.741l1.553 5.796-1.932.517-.256-.956zM5 21a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m13 3a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </Svg>
  )
})
Icon.displayName = 'BikeFill'
/**
 * Remix Icon: Bike Fill
 * @see {@link https://remixicon.com/icon/bike-fill Remix Icon Docs}
 */
export const BikeFill = Icon
