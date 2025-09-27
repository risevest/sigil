import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938V21h-2zM12 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12m-7 6h14v2H5z" />
    </Svg>
  )
})
Icon.displayName = 'MapPin4Line'
/**
 * Remix Icon: Map Pin 4 Line
 * @see {@link https://remixicon.com/icon/map-pin-4-line Remix Icon Docs}
 */
export const MapPin4Line = Icon
