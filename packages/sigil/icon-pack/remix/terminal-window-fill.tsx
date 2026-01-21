import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TerminalWindowFill = /* @__PURE__ */ memo(function TerminalWindowFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 10H4v9h16zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 3v2h2V6zm4 0v2h2V6zm-4 5h3v5H5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Terminal Window Fill
 * @see {@link https://remixicon.com/icon/terminal-window-fill Remix Icon Docs}
 */
export { TerminalWindowFill }
