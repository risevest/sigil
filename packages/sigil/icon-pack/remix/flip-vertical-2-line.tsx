import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FlipVertical2Line = /* @__PURE__ */ memo(function FlipVertical2Line(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm5 6 4-4 4 4h-3v4h3l-4 4-4-4h3v-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Flip Vertical 2 Line
 * @see {@link https://remixicon.com/icon/flip-vertical-2-line Remix Icon Docs}
 */
export { FlipVertical2Line }
