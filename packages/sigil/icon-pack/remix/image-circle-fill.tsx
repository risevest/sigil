import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ImageCircleFill = /* @__PURE__ */ memo(function ImageCircleFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m19.576 14.576-3.869-3.869a1 1 0 0 0-1.414 0l-7.428 7.428a8 8 0 1 1 12.711-3.559M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-1-12a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Image Circle Fill
 * @see {@link https://remixicon.com/icon/image-circle-fill Remix Icon Docs}
 */
export { ImageCircleFill }
