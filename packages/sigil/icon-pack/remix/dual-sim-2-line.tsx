import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DualSim2Line = /* @__PURE__ */ memo(function DualSim2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15 2 4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-.829 2H6v16h12V7.829zM12 7.5a3 3 0 0 1 2.009 5.228l-.008-.008.006.01L12.595 14H15v2H9v-1.453l3.67-3.304A1 1 0 1 0 11 10.5H9a3 3 0 0 1 3-3" />
    </Svg>
  )
})
/**
 * Remix Icon: Dual Sim 2 Line
 * @see {@link https://remixicon.com/icon/dual-sim-2-line Remix Icon Docs}
 */
export { DualSim2Line }
