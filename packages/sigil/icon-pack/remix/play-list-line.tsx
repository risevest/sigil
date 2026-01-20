import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PlayListLine = /* @__PURE__ */ memo(function PlayListLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 18h10v2H2zm0-7h14v2H2zm0-7h20v2H2zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83M18 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </Svg>
  )
})
/**
 * Remix Icon: Play List Line
 * @see {@link https://remixicon.com/icon/play-list-line Remix Icon Docs}
 */
export { PlayListLine }
