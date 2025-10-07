import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m2 5 7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46zm12.935 2.204-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033z" />
    </Svg>
  )
})
Icon.displayName = 'MapLine'
/**
 * Remix Icon: Map Line
 * @see {@link https://remixicon.com/icon/map-line Remix Icon Docs}
 */
export const MapLine = Icon
