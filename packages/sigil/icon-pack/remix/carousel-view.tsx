import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CarouselView = /* @__PURE__ */ memo(function CarouselView(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 3H1v2h2v14H1v2h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m3 1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm2 1v14h6V5zm10-1a1 1 0 0 1 1-1h3v2h-2v14h2v2h-3a1 1 0 0 1-1-1z" />
    </Svg>
  )
})
/**
 * Remix Icon: Carousel View
 * @see {@link https://remixicon.com/icon/carousel-view Remix Icon Docs}
 */
export { CarouselView }
