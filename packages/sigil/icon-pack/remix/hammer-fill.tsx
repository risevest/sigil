import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const HammerFill = /* @__PURE__ */ memo(function HammerFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17 8V2h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-2 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V8H2.5V6.074a1 1 0 0 1 .496-.863L8.5 2H15z" />
    </Svg>
  )
})
/**
 * Remix Icon: Hammer Fill
 * @see {@link https://remixicon.com/icon/hammer-fill Remix Icon Docs}
 */
export { HammerFill }
