import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExpandLeftRightFill = /* @__PURE__ */ memo(function ExpandLeftRightFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m9 6-6 6 6 6zm6 12 6-6-6-6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Expand Left Right Fill
 * @see {@link https://remixicon.com/icon/expand-left-right-fill Remix Icon Docs}
 */
export { ExpandLeftRightFill }
