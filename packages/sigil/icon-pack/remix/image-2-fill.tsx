import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Image2Fill = /* @__PURE__ */ memo(function Image2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m5 11.1 2-2 5.5 5.5 3.5-3.5 3 3V5H5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m11.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </Svg>
  )
})
/**
 * Remix Icon: Image 2 Fill
 * @see {@link https://remixicon.com/icon/image-2-fill Remix Icon Docs}
 */
export { Image2Fill }
