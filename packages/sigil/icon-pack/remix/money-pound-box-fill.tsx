import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MoneyPoundBoxFill = /* @__PURE__ */ memo(function MoneyPoundBoxFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m6 10v2h-1v2h8v-2h-5v-2h3v-2h-3v-1a1.5 1.5 0 0 1 2.76-.815l1.986-.497a3.501 3.501 0 0 0-6.746 1.312v1h-1v2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Money Pound Box Fill
 * @see {@link https://remixicon.com/icon/money-pound-box-fill Remix Icon Docs}
 */
export { MoneyPoundBoxFill }
