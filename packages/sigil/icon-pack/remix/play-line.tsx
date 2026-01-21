import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PlayLine = /* @__PURE__ */ memo(function PlayLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16.394 12 10 7.737v8.526zm2.982.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832" />
    </Svg>
  )
})
/**
 * Remix Icon: Play Line
 * @see {@link https://remixicon.com/icon/play-line Remix Icon Docs}
 */
export { PlayLine }
