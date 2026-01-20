import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FontColor = /* @__PURE__ */ memo(function FontColor(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M15.246 14H8.754l-1.6 4H5l6-15h2l6 15h-2.154zm-.8-2L12 5.885 9.554 12zM3 20h18v2H3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Font Color
 * @see {@link https://remixicon.com/icon/font-color Remix Icon Docs}
 */
export { FontColor }
