import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SpeedMiniFill = /* @__PURE__ */ memo(function SpeedMiniFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4.788 17.443A.5.5 0 0 1 4 17.035V6.965a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817zM13 6.965a.5.5 0 0 1 .788-.409l7.133 5.035a.5.5 0 0 1 0 .817l-7.133 5.035a.5.5 0 0 1-.788-.408z" />
    </Svg>
  )
})
/**
 * Remix Icon: Speed Mini Fill
 * @see {@link https://remixicon.com/icon/speed-mini-fill Remix Icon Docs}
 */
export { SpeedMiniFill }
