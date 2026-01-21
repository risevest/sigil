import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PlayLargeLine = /* @__PURE__ */ memo(function PlayLargeLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M8 18.392V5.608L18.226 12zM6 3.804v16.392a1 1 0 0 0 1.53.848l13.113-8.196a1 1 0 0 0 0-1.696L7.53 2.956A1 1 0 0 0 6 3.804" />
    </Svg>
  )
})
/**
 * Remix Icon: Play Large Line
 * @see {@link https://remixicon.com/icon/play-large-line Remix Icon Docs}
 */
export { PlayLargeLine }
