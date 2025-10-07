import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.364 17.364 12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
Icon.displayName = 'MapPin2Fill'
/**
 * Remix Icon: Map Pin 2 Fill
 * @see {@link https://remixicon.com/icon/map-pin-2-fill Remix Icon Docs}
 */
export const MapPin2Fill = Icon
