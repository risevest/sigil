import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m11 12-7.071 7.071-1.414-1.414L8.172 12 2.515 6.343 3.929 4.93zm0 7h10v2H11z" />
    </Svg>
  )
})
Icon.displayName = 'TerminalFill'
/**
 * Remix Icon: Terminal Fill
 * @see {@link https://remixicon.com/icon/terminal-fill Remix Icon Docs}
 */
export const TerminalFill = Icon
