import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SkipBackMiniLine = /* @__PURE__ */ memo(function SkipBackMiniLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 8.14V9.86L11.968 12zm-5.921-1.732a.5.5 0 0 1 0-.816l7.133-5.036a.5.5 0 0 1 .788.409v10.07a.5.5 0 0 1-.788.409z" />
    </Svg>
  )
})
/**
 * Remix Icon: Skip Back Mini Line
 * @see {@link https://remixicon.com/icon/skip-back-mini-line Remix Icon Docs}
 */
export { SkipBackMiniLine }
