import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HammerLine = /* @__PURE__ */ memo(function HammerLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5v13a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9H3.5a1 1 0 0 1-1-1V5.618a1 1 0 0 1 .553-.894L8.5 2zm-5 2H8.972L4.5 6.236V7H11v14h2V7h2zm4 0h-2v3h2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Hammer Line
 * @see {@link https://remixicon.com/icon/hammer-line Remix Icon Docs}
 */
export { HammerLine }
