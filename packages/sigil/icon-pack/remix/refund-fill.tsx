import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RefundFill = /* @__PURE__ */ memo(function RefundFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22.005 7h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm0 2v11a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V9zm-11 5v-2.5l-4.5 4.5h10.5v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Refund Fill
 * @see {@link https://remixicon.com/icon/refund-fill Remix Icon Docs}
 */
export { RefundFill }
