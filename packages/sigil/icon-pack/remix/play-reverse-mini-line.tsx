import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PlayReverseMiniLine = /* @__PURE__ */ memo(function PlayReverseMiniLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15 8.482v7.036L8.97 12zm1.248-3.043L5.74 11.569a.5.5 0 0 0 0 .863l10.508 6.13A.5.5 0 0 0 17 18.13V5.87a.5.5 0 0 0-.752-.431" />
    </Svg>
  )
})
/**
 * Remix Icon: Play Reverse Mini Line
 * @see {@link https://remixicon.com/icon/play-reverse-mini-line Remix Icon Docs}
 */
export { PlayReverseMiniLine }
