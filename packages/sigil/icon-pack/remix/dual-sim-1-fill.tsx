import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15 2 4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-2 6h-3v2h1v6h2z" />
    </Svg>
  )
})
Icon.displayName = 'DualSim1Fill'
/**
 * Remix Icon: Dual Sim 1 Fill
 * @see {@link https://remixicon.com/icon/dual-sim-1-fill Remix Icon Docs}
 */
export const DualSim1Fill = Icon
