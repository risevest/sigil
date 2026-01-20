import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BarChartHorizontalFill = /* @__PURE__ */ memo(function BarChartHorizontalFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12 3v4H3V3zm4 14v4H3v-4zm6-7v4H3v-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bar Chart Horizontal Fill
 * @see {@link https://remixicon.com/icon/bar-chart-horizontal-fill Remix Icon Docs}
 */
export { BarChartHorizontalFill }
