import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PlayReverseLargeLine = /* @__PURE__ */ memo(function PlayReverseLargeLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M16 18.392V5.608L5.774 12zm2-14.588v16.392a1 1 0 0 1-1.53.848L3.357 12.848a1 1 0 0 1 0-1.696L16.47 2.956a1 1 0 0 1 1.53.848" />
    </Svg>
  )
})
/**
 * Remix Icon: Play Reverse Large Line
 * @see {@link https://remixicon.com/icon/play-reverse-large-line Remix Icon Docs}
 */
export { PlayReverseLargeLine }
