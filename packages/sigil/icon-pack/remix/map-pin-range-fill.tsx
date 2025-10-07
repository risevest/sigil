import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938v2.074c3.946.092 7 .723 7 1.488 0 .828-3.582 1.5-8 1.5s-8-.672-8-1.5c0-.765 3.054-1.396 7-1.488zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
Icon.displayName = 'MapPinRangeFill'
/**
 * Remix Icon: Map Pin Range Fill
 * @see {@link https://remixicon.com/icon/map-pin-range-fill Remix Icon Docs}
 */
export const MapPinRangeFill = Icon
