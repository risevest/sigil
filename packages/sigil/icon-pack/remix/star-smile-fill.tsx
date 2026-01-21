import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const StarSmileFill = /* @__PURE__ */ memo(function StarSmileFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m12 .5 4.226 6.183 7.186 2.109-4.575 5.93.216 7.486L12 19.69l-7.054 2.518.216-7.486-4.575-5.93 7.187-2.109zM10 12H8a4 4 0 0 0 7.995.2L16 12h-2a2 2 0 0 1-3.995.15z" />
    </Svg>
  )
})
/**
 * Remix Icon: Star Smile Fill
 * @see {@link https://remixicon.com/icon/star-smile-fill Remix Icon Docs}
 */
export { StarSmileFill }
