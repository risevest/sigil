import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const KickFill = /* @__PURE__ */ memo(function KickFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18v18H3zm7.564 2.536h-4.31v12.928h4.31V15.59H12v1.436h1.436v1.436h4.31v-4.309h-1.437v-1.436h-1.436v-1.436h1.436V9.845h1.436V5.536h-4.309v1.436H12V8.41h-1.436z" />
    </Svg>
  )
})
/**
 * Remix Icon: Kick Fill
 * @see {@link https://remixicon.com/icon/kick-fill Remix Icon Docs}
 */
export { KickFill }
