import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Building2Line = /* @__PURE__ */ memo(function Building2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2zm2 0h7V3.855L5 6.401zm14 0v-8.558l-5-1.667V19z" />
    </Svg>
  )
})
/**
 * Remix Icon: Building 2 Line
 * @see {@link https://remixicon.com/icon/building-2-line Remix Icon Docs}
 */
export { Building2Line }
