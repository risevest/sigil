import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MixtralFill = /* @__PURE__ */ memo(function MixtralFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h3.6v3.6h3.6v3.6h3.6V6.6h3.6V3H21v18h-3.6v-7.2h-3.6v3.6h-3.6v-3.6H6.6V21H3z" />
    </Svg>
  )
})
/**
 * Remix Icon: Mixtral Fill
 * @see {@link https://remixicon.com/icon/mixtral-fill Remix Icon Docs}
 */
export { MixtralFill }
