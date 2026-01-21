import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExpandDiagonal2Fill = /* @__PURE__ */ memo(function ExpandDiagonal2Fill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h7.5L7.457 6.043l3.25 3.25-1.414 1.414-3.25-3.25L3 10.5zm18 18h-7.5l3.043-3.043-3.25-3.25 1.414-1.414 3.25 3.25L21 13.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Expand Diagonal 2 Fill
 * @see {@link https://remixicon.com/icon/expand-diagonal-2-fill Remix Icon Docs}
 */
export { ExpandDiagonal2Fill }
