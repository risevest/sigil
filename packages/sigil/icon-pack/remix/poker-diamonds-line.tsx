import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PokerDiamondsLine = /* @__PURE__ */ memo(function PokerDiamondsLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.036 10.734a2 2 0 0 0 0 2.533l7.19 8.787a1 1 0 0 0 1.548 0l7.19-8.787a2 2 0 0 0 0-2.533l-7.19-8.788a1 1 0 0 0-1.548 0zM12 4.158 18.416 12 12 19.842 5.584 12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Poker Diamonds Line
 * @see {@link https://remixicon.com/icon/poker-diamonds-line Remix Icon Docs}
 */
export { PokerDiamondsLine }
