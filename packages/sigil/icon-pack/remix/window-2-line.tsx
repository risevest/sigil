import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Window2Line = /* @__PURE__ */ memo(function Window2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 8H4v8h16zm0-6H4v4h16zm-1 1v2h-4V6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Window 2 Line
 * @see {@link https://remixicon.com/icon/window-2-line Remix Icon Docs}
 */
export { Window2Line }
