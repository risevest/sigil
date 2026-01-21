import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BarChart2Line = /* @__PURE__ */ memo(function BarChart2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 13h6v8H2zm14-5h6v13h-6zM9 3h6v18H9zM4 15v4h2v-4zm7-10v14h2V5zm7 5v9h2v-9z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bar Chart 2 Line
 * @see {@link https://remixicon.com/icon/bar-chart-2-line Remix Icon Docs}
 */
export { BarChart2Line }
