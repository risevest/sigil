import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PokerDiamondsFill = /* @__PURE__ */ memo(function PokerDiamondsFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m4.036 10.734 7.19-8.788a1 1 0 0 1 1.548 0l7.19 8.788a2 2 0 0 1 0 2.533l-7.19 8.787a1 1 0 0 1-1.548 0l-7.19-8.787a2 2 0 0 1 0-2.533" />
    </Svg>
  )
})
/**
 * Remix Icon: Poker Diamonds Fill
 * @see {@link https://remixicon.com/icon/poker-diamonds-fill Remix Icon Docs}
 */
export { PokerDiamondsFill }
