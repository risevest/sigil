import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Slideshow2Fill = /* @__PURE__ */ memo(function Slideshow2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 17v3h5v2H6v-2h5v-3H4a1 1 0 0 1-1-1V4H2V2h20v2h-1v12a1 1 0 0 1-1 1zM10 6v7l5-3.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Slideshow 2 Fill
 * @see {@link https://remixicon.com/icon/slideshow-2-fill Remix Icon Docs}
 */
export { Slideshow2Fill }
