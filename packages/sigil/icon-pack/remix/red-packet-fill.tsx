import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RedPacketFill = /* @__PURE__ */ memo(function RedPacketFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21.005 5.94a12 12 0 0 1-6.806 3.863 2.5 2.5 0 0 0-4.388 0A12 12 0 0 1 3.005 5.94V3.003a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm0 2.787v12.276a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V8.727a13.95 13.95 0 0 0 6.63 3.076 2.501 2.501 0 0 0 4.739 0 13.95 13.95 0 0 0 6.63-3.076" />
    </Svg>
  )
})
/**
 * Remix Icon: Red Packet Fill
 * @see {@link https://remixicon.com/icon/red-packet-fill Remix Icon Docs}
 */
export { RedPacketFill }
