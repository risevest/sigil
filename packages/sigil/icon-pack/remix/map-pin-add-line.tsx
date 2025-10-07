import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 20.9 4.95-4.95a7 7 0 1 0-9.9 0zm0 2.828-6.364-6.364a9 9 0 1 1 12.728 0zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2z" />
    </Svg>
  )
})
Icon.displayName = 'MapPinAddLine'
/**
 * Remix Icon: Map Pin Add Line
 * @see {@link https://remixicon.com/icon/map-pin-add-line Remix Icon Docs}
 */
export const MapPinAddLine = Icon
