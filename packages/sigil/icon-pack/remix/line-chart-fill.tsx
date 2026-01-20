import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const LineChartFill = /* @__PURE__ */ memo(function LineChartFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 3v16h16v2H3V3zm14.94 2.94 2.12 2.12L16 14.122l-3-3-3.94 3.94-2.12-2.122L13 6.88l3 3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Line Chart Fill
 * @see {@link https://remixicon.com/icon/line-chart-fill Remix Icon Docs}
 */
export { LineChartFill }
