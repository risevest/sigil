import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11.39 10.39 7.5 14.277 3.61 10.39a5.5 5.5 0 1 1 7.78 0M7.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12.89 10.89-3.89 3.888-3.89-3.889a5.5 5.5 0 1 1 7.78 0M16.5 17.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
Icon.displayName = 'PinDistanceFill'
/**
 * Remix Icon: Pin Distance Fill
 * @see {@link https://remixicon.com/icon/pin-distance-fill Remix Icon Docs}
 */
export const PinDistanceFill = Icon
