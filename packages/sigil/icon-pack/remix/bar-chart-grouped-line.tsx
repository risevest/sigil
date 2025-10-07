import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 12h2v9H2zm3 2h2v7H5zm11-6h2v13h-2zm3 2h2v11h-2zM9 2h2v19H9zm3 2h2v17h-2z" />
    </Svg>
  )
})
Icon.displayName = 'BarChartGroupedLine'
/**
 * Remix Icon: Bar Chart Grouped Line
 * @see {@link https://remixicon.com/icon/bar-chart-grouped-line Remix Icon Docs}
 */
export const BarChartGroupedLine = Icon
