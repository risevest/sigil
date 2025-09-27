import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 3h7a6 6 0 0 1 0 12H8v6H6zm2 2v8h5a4 4 0 0 0 0-8z" />
    </Svg>
  )
})
Icon.displayName = 'ParkingLine'
/**
 * Remix Icon: Parking Line
 * @see {@link https://remixicon.com/icon/parking-line Remix Icon Docs}
 */
export const ParkingLine = Icon
