import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 11V6h-2v7h6v-2zm5.364 6.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0" />
    </Svg>
  )
})
Icon.displayName = 'MapPinTimeFill'
/**
 * Remix Icon: Map Pin Time Fill
 * @see {@link https://remixicon.com/icon/map-pin-time-fill Remix Icon Docs}
 */
export const MapPinTimeFill = Icon
