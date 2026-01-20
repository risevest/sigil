import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VipCrownFill = /* @__PURE__ */ memo(function VipCrownFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.005 19h20v2h-20zm0-14 5 3 5-6 5 6 5-3v12h-20z" />
    </Svg>
  )
})
/**
 * Remix Icon: Vip Crown Fill
 * @see {@link https://remixicon.com/icon/vip-crown-fill Remix Icon Docs}
 */
export { VipCrownFill }
