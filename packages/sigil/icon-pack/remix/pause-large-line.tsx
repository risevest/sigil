import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PauseLargeLine = /* @__PURE__ */ memo(function PauseLargeLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 3h2v18H6zm10 0h2v18h-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Pause Large Line
 * @see {@link https://remixicon.com/icon/pause-large-line Remix Icon Docs}
 */
export { PauseLargeLine }
