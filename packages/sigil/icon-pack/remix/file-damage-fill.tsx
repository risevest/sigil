import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileDamageFill = /* @__PURE__ */ memo(function FileDamageFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m3 14 4 2.5 3-3.5 3 4 2-2.5 3 .5-3-3-2 2.5-3-5-3.5 3.75L3 10V2.992C3 2.455 3.447 2 3.998 2H14v6a1 1 0 0 0 1 1h6v11.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008zm18-7h-5V2.003z" />
    </Svg>
  )
})
/**
 * Remix Icon: File Damage Fill
 * @see {@link https://remixicon.com/icon/file-damage-fill Remix Icon Docs}
 */
export { FileDamageFill }
