import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const RefundLine = /* @__PURE__ */ memo(function RefundLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20.005 8V5h-16v3zm0 2h-16v9h16zm-17-7h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8 11h6v2h-10.5l4.5-4.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Refund Line
 * @see {@link https://remixicon.com/icon/refund-line Remix Icon Docs}
 */
export { RefundLine }
