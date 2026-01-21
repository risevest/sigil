import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MegaphoneFill = /* @__PURE__ */ memo(function MegaphoneFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 10.063V4a1 1 0 0 0-1-1h-1c-1.979 1.979-5.697 3.087-8 3.613v10.774c2.303.526 6.021 1.634 8 3.613h1a1 1 0 0 0 1-1v-6.063a2 2 0 0 0 0-3.874M5 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1l1 5h2V7z" />
    </Svg>
  )
})
/**
 * Remix Icon: Megaphone Fill
 * @see {@link https://remixicon.com/icon/megaphone-fill Remix Icon Docs}
 */
export { MegaphoneFill }
