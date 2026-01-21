import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FontFamily = /* @__PURE__ */ memo(function FontFamily(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M5.554 22H3.4L11 3h2l7.6 19h-2.154l-2.4-6H7.954zm3.2-8h6.492L12 5.885z" />
    </Svg>
  )
})
/**
 * Remix Icon: Font Family
 * @see {@link https://remixicon.com/icon/font-family Remix Icon Docs}
 */
export { FontFamily }
