import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CalculatorFill = /* @__PURE__ */ memo(function CalculatorFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 10v2h2v-2zm0 4v2h2v-2zm4-4v2h2v-2zm0 4v2h2v-2zm4-4v6h2v-6zM7 6v4h10V6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Calculator Fill
 * @see {@link https://remixicon.com/icon/calculator-fill Remix Icon Docs}
 */
export { CalculatorFill }
