import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M18.364 17.364 12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </Svg>
  )
})
Icon.displayName = 'MapPinFill'
/**
 * Remix Icon: Map Pin Fill
 * @see {@link https://remixicon.com/icon/map-pin-fill Remix Icon Docs}
 */
export const MapPinFill = Icon
