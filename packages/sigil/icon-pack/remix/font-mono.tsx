import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FontMono = /* @__PURE__ */ memo(function FontMono(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 4h13v2H8v6h10v2H8v7H6z" />
    </Svg>
  )
})
/**
 * Remix Icon: Font Mono
 * @see {@link https://remixicon.com/icon/font-mono Remix Icon Docs}
 */
export { FontMono }
