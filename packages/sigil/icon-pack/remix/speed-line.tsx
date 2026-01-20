import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SpeedLine = /* @__PURE__ */ memo(function SpeedLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 13.333-9.223 6.149A.5.5 0 0 1 2 19.066V4.934a.5.5 0 0 1 .777-.416L12 10.667V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832l-10.599 7.066a.5.5 0 0 1-.777-.416zM10.394 12 4 7.737v8.526zM14 7.737v8.526L20.394 12z" />
    </Svg>
  )
})
/**
 * Remix Icon: Speed Line
 * @see {@link https://remixicon.com/icon/speed-line Remix Icon Docs}
 */
export { SpeedLine }
