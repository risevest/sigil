import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GasStationLine = /* @__PURE__ */ memo(function GasStationLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M13 3a2 2 0 0 1 1.995 1.85L15 5v7h1a2 2 0 0 1 1.995 1.85L18 14v2.5a.5.5 0 0 0 .992.09L19 16.5V12a2 2 0 0 1-1.123-.345 2 2 0 0 1-.558-2.738l.075-.109-1.101-1.1a1 1 0 0 1 1.32-1.498l.094.083L20.414 9a2 2 0 0 1 .578 1.238l.008.176V16.5a2.5 2.5 0 0 1-4.995.164L16 16.5V14h-1v5a1 1 0 0 1 .117 1.993L15 21H3a1 1 0 0 1-.117-1.993L3 19V5a2 2 0 0 1 1.85-1.995L5 3zm0 10H5v6h8zm0-8H5v6h8z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Gas Station Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { GasStationLine }
