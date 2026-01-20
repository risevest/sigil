import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const SlideshowLine = /* @__PURE__ */ memo(function SlideshowLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1zm-9-2h16V8H4zm9-9h5v2h-5zm0 4h5v2h-5zm-4-4v3h3a3 3 0 1 1-3-3M2 3h20v2H2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Slideshow Line
 * @see {@link https://remixicon.com/icon/slideshow-line Remix Icon Docs}
 */
export { SlideshowLine }
