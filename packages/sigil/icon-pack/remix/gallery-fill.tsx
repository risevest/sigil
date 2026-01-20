import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const GalleryFill = /* @__PURE__ */ memo(function GalleryFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.95 10.95 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7zM18 1v4h-8V3h6V1zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </Svg>
  )
})
/**
 * Remix Icon: Gallery Fill
 * @see {@link https://remixicon.com/icon/gallery-fill Remix Icon Docs}
 */
export { GalleryFill }
