import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VipLine = /* @__PURE__ */ memo(function VipLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.005 19h20v2h-20zm9-11h2v8h-2zM7.97 8l-1.86 5.113L4.247 8H2.123l2.986 7.964h2L10.095 8zm9.035 6v2h-2V8h4a3 3 0 0 1 0 6zm0-4v2h2a1 1 0 1 0 0-2zm-15-7h20v2h-20z" />
    </Svg>
  )
})
/**
 * Remix Icon: Vip Line
 * @see {@link https://remixicon.com/icon/vip-line Remix Icon Docs}
 */
export { VipLine }
