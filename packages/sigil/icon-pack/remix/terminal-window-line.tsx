import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 9V5H4v4zm0 2H4v8h16zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 9h3v5H5zm0-6h2v2H5zm4 0h2v2H9z" />
    </Svg>
  )
})
Icon.displayName = 'TerminalWindowLine'
/**
 * Remix Icon: Terminal Window Line
 * @see {@link https://remixicon.com/icon/terminal-window-line Remix Icon Docs}
 */
export const TerminalWindowLine = Icon
