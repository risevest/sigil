import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const TShirt2Fill = /* @__PURE__ */ memo(function TShirt2Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20.998 3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2.001l.001 8a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1l-.001-8.001L2.998 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a3 3 0 1 0 6 0z" />
    </Svg>
  )
})
/**
 * Remix Icon: T Shirt 2 Fill
 * @see {@link https://remixicon.com/icon/t-shirt-2-fill Remix Icon Docs}
 */
export { TShirt2Fill }
