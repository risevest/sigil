import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FontSans = /* @__PURE__ */ memo(function FontSans(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 4h12v2h-9v6h8v2h-8v7H7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Font Sans
 * @see {@link https://remixicon.com/icon/font-sans Remix Icon Docs}
 */
export { FontSans }
