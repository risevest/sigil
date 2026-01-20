import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BarChartHorizontalLine = /* @__PURE__ */ memo(function BarChartHorizontalLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 3v2H3V3zm4 16v2H3v-2zm6-8v2H3v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bar Chart Horizontal Line
 * @see {@link https://remixicon.com/icon/bar-chart-horizontal-line Remix Icon Docs}
 */
export { BarChartHorizontalLine }
