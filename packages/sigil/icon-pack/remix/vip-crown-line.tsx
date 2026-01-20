import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const VipCrownLine = /* @__PURE__ */ memo(function VipCrownLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.005 19h20v2h-20zm0-14 5 3.5 5-6.5 5 6.5 5-3.5v12h-20zm2 3.841V15h16V8.841l-3.42 2.394-4.58-5.955-4.58 5.955z" />
    </Svg>
  )
})
/**
 * Remix Icon: Vip Crown Line
 * @see {@link https://remixicon.com/icon/vip-crown-line Remix Icon Docs}
 */
export { VipCrownLine }
