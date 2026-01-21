import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TerminalBoxFill = /* @__PURE__ */ memo(function TerminalBoxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 12v2h6v-2zm-3.586-3-2.828 2.828L7 16.243 11.243 12 7 7.757 5.586 9.172z" />
    </Svg>
  )
})
/**
 * Remix Icon: Terminal Box Fill
 * @see {@link https://remixicon.com/icon/terminal-box-fill Remix Icon Docs}
 */
export { TerminalBoxFill }
