import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SimCardFill = /* @__PURE__ */ memo(function SimCardFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 10v6h8v-6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Sim Card Fill
 * @see {@link https://remixicon.com/icon/sim-card-fill Remix Icon Docs}
 */
export { SimCardFill }
