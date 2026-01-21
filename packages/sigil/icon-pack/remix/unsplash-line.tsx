import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UnsplashLine = /* @__PURE__ */ memo(function UnsplashLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M10.001 10v4h4v-4h7v11h-18V10zm-2 2h-3v7h14v-7h-3L16 16H8zm8-9v6h-8V3zm-2 2h-4v2h4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Unsplash Line
 * @see {@link https://remixicon.com/icon/unsplash-line Remix Icon Docs}
 */
export { UnsplashLine }
