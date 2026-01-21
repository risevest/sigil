import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SlideshowView = /* @__PURE__ */ memo(function SlideshowView(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 10h16V5H4zm0 2v3h4v-3zm6 0v3h4v-3zm6 0v3h4v-3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Slideshow View
 * @see {@link https://remixicon.com/icon/slideshow-view Remix Icon Docs}
 */
export { SlideshowView }
