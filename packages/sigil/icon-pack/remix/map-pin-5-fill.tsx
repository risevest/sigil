import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.657 15.657 12 21.314l-5.657-5.657a8 8 0 1 1 11.314 0M5 22h14v2H5z" />
    </Svg>
  )
})
Icon.displayName = 'MapPin5Fill'
/**
 * Remix Icon: Map Pin 5 Fill
 * @see {@link https://remixicon.com/icon/map-pin-5-fill Remix Icon Docs}
 */
export const MapPin5Fill = Icon
