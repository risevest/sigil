import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.95 15.95a7 7 0 1 0-9.9 0L12 20.9zM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM13 11h4v2h-6V6h2z" />
    </Svg>
  )
})
Icon.displayName = 'MapPinTimeLine'
/**
 * Remix Icon: Map Pin Time Line
 * @see {@link https://remixicon.com/icon/map-pin-time-line Remix Icon Docs}
 */
export const MapPinTimeLine = Icon
