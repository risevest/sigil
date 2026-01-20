import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MistFill = /* @__PURE__ */ memo(function MistFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M4 4h4v2H4zm12 15h4v2h-4zM2 9h10v2H2zm12 0h6v2h-6zM4 14h6v2H4zm8 0h10v2H12zM10 4h12v2H10zM2 19h12v2H2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Mist Fill
 * @see {@link https://remixicon.com/icon/mist-fill Remix Icon Docs}
 */
export { MistFill }
