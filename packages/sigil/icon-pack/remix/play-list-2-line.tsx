import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PlayList2Line = /* @__PURE__ */ memo(function PlayList2Line(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 18v2H2v-2zM2 3.5l8 5-8 5zM22 11v2H12v-2zM4 7.109v2.783L6.226 8.5zM22 4v2H12V4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Play List 2 Line
 * @see {@link https://remixicon.com/icon/play-list-2-line Remix Icon Docs}
 */
export { PlayList2Line }
