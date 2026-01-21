import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SwapFill = /* @__PURE__ */ memo(function SwapFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m-5-13h2v4h2v-4h2l-3-3.5zm10 6h-2v-4h-2v4h-2l3 3.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Swap Fill
 * @see {@link https://remixicon.com/icon/swap-fill Remix Icon Docs}
 */
export { SwapFill }
