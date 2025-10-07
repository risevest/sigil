import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 19.945A9.001 9.001 0 0 1 12 2a9 9 0 0 1 1 17.945V24h-2zM12 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14" />
    </Svg>
  )
})
Icon.displayName = 'MapPin3Line'
/**
 * Remix Icon: Map Pin 3 Line
 * @see {@link https://remixicon.com/icon/map-pin-3-line Remix Icon Docs}
 */
export const MapPin3Line = Icon
