import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BatteryLowLine = /* @__PURE__ */ memo(function BatteryLowLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 7v10h14V7zM3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m2 3h4v8H5zm16 1h2v6h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Battery Low Line
 * @see {@link https://remixicon.com/icon/battery-low-line Remix Icon Docs}
 */
export { BatteryLowLine }
