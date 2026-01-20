import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BarChartLine = /* @__PURE__ */ memo(function BarChartLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 12h2v9H3zm16-4h2v13h-2zm-8-6h2v19h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bar Chart Line
 * @see {@link https://remixicon.com/icon/bar-chart-line Remix Icon Docs}
 */
export { BarChartLine }
