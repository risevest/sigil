import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8.667 2.57a1 1 0 0 1 1.326.821l.007.121V12a2 2 0 0 0 1.85 1.995L12 14h8.488a1 1 0 0 1 .943 1.333C20.058 19.216 16.356 22 12 22 6.477 22 2 17.523 2 12c0-4.356 2.784-8.058 6.667-9.43m4.322-.515.12.006a10.004 10.004 0 0 1 8.83 8.83 1 1 0 0 1-.873 1.102l-.12.007H13a1 1 0 0 1-.993-.883L12 11V3.055a1 1 0 0 1 .989-1"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'ChartPie2Fill'
/**
 * MingCute Icon: Chart Pie 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ChartPie2Fill = Icon
