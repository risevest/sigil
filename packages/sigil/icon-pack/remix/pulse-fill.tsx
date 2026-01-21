import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PulseFill = /* @__PURE__ */ memo(function PulseFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m9 7.539 6 14L18.66 13H23v-2h-5.66L15 16.461l-6-14L5.34 11H1v2h5.66z" />
    </Svg>
  )
})
/**
 * Remix Icon: Pulse Fill
 * @see {@link https://remixicon.com/icon/pulse-fill Remix Icon Docs}
 */
export { PulseFill }
