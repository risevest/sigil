import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GalleryView = /* @__PURE__ */ memo(function GalleryView(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 1v14h16V5zm2 2h5v4H6zm5 6H6v4h5zm2-6h5v4h-5zm5 6h-5v4h5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Gallery View
 * @see {@link https://remixicon.com/icon/gallery-view Remix Icon Docs}
 */
export { GalleryView }
