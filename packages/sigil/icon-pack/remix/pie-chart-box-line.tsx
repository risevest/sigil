import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm12.9 8A5.002 5.002 0 0 1 7 12a5 5 0 0 1 4-4.9V13zm0-2H13V7.1a5.01 5.01 0 0 1 3.9 3.9" />
    </Svg>
  )
})
Icon.displayName = 'PieChartBoxLine'
/**
 * Remix Icon: Pie Chart Box Line
 * @see {@link https://remixicon.com/icon/pie-chart-box-line Remix Icon Docs}
 */
export const PieChartBoxLine = Icon
