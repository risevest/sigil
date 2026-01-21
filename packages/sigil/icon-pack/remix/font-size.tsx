import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FontSize = /* @__PURE__ */ memo(function FontSize(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154zm-.8-2L8 6.885 5.554 13zM21 12.535V12h2v8h-2v-.535a4 4 0 1 1 0-6.93M19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </Svg>
  )
})
/**
 * Remix Icon: Font Size
 * @see {@link https://remixicon.com/icon/font-size Remix Icon Docs}
 */
export { FontSize }
