import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const KeyboardBoxLine = /* @__PURE__ */ memo(function KeyboardBoxLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 4h2v2H6zm0 4h2v2H6zm0 4h12v2H6zm5-4h2v2h-2zm0-4h2v2h-2zm5 0h2v2h-2zm0 4h2v2h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Keyboard Box Line
 * @see {@link https://remixicon.com/icon/keyboard-box-line Remix Icon Docs}
 */
export { KeyboardBoxLine }
