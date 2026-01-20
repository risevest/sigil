import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ParkingFill = /* @__PURE__ */ memo(function ParkingFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 3h7a6 6 0 0 1 0 12h-3v6H6zm4 4v4h3a2 2 0 1 0 0-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Parking Fill
 * @see {@link https://remixicon.com/icon/parking-fill Remix Icon Docs}
 */
export { ParkingFill }
