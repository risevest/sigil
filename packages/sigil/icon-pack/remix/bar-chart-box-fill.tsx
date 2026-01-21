import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BarChartBoxFill = /* @__PURE__ */ memo(function BarChartBoxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 10v4h2v-4zm4-6v10h2V7zm4 3v7h2v-7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bar Chart Box Fill
 * @see {@link https://remixicon.com/icon/bar-chart-box-fill Remix Icon Docs}
 */
export { BarChartBoxFill }
