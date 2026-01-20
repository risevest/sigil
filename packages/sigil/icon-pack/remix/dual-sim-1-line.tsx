import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const DualSim1Line = /* @__PURE__ */ memo(function DualSim1Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m15 2 4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-.829 2H6v16h12V7.829zM13 16h-2v-6h-1V8h3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Dual Sim 1 Line
 * @see {@link https://remixicon.com/icon/dual-sim-1-line Remix Icon Docs}
 */
export { DualSim1Line }
