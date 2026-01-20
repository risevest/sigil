import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FlipHorizontal2Line = /* @__PURE__ */ memo(function FlipHorizontal2Line(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm7 4v3h4V8l4 4-4 4v-3h-4v3l-4-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Flip Horizontal 2 Line
 * @see {@link https://remixicon.com/icon/flip-horizontal-2-line Remix Icon Docs}
 */
export { FlipHorizontal2Line }
