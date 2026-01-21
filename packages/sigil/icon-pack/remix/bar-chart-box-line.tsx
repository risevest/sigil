import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BarChartBoxLine = /* @__PURE__ */ memo(function BarChartBoxLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm3 8h2v4H7zm4-6h2v10h-2zm4 3h2v7h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bar Chart Box Line
 * @see {@link https://remixicon.com/icon/bar-chart-box-line Remix Icon Docs}
 */
export { BarChartBoxLine }
