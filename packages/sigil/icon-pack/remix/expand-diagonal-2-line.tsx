import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExpandDiagonal2Line = /* @__PURE__ */ memo(function ExpandDiagonal2Line(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6.414 5H10V3H3v7h2V6.414l4.293 4.293 1.414-1.414zM21 14h-2v3.586l-4.293-4.293-1.414 1.414L17.586 19H14v2h7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Expand Diagonal 2 Line
 * @see {@link https://remixicon.com/icon/expand-diagonal-2-line Remix Icon Docs}
 */
export { ExpandDiagonal2Line }
