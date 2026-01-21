import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExpandDiagonalFill = /* @__PURE__ */ memo(function ExpandDiagonalFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3h-7.5l3.043 3.043-3.25 3.25 1.414 1.414 3.25-3.25L21 10.5zM3 21h7.5l-3.043-3.043 3.25-3.25-1.414-1.414-3.25 3.25L3 13.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Expand Diagonal Fill
 * @see {@link https://remixicon.com/icon/expand-diagonal-fill Remix Icon Docs}
 */
export { ExpandDiagonalFill }
