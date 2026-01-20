import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const KeyboardBoxFill = /* @__PURE__ */ memo(function KeyboardBoxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 4v2h2V7zm0 4v2h2v-2zm0 4v2h14v-2zm4-4v2h2v-2zm0-4v2h2V7zm4 0v2h2V7zm4 0v2h2V7zm-4 4v2h2v-2zm4 0v2h2v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Keyboard Box Fill
 * @see {@link https://remixicon.com/icon/keyboard-box-fill Remix Icon Docs}
 */
export { KeyboardBoxFill }
