import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SpeakerFill = /* @__PURE__ */ memo(function SpeakerFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m8 18a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0-12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </Svg>
  )
})
/**
 * Remix Icon: Speaker Fill
 * @see {@link https://remixicon.com/icon/speaker-fill Remix Icon Docs}
 */
export { SpeakerFill }
