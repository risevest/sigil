import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MoneyEuroBoxFill = /* @__PURE__ */ memo(function MoneyEuroBoxFill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m7.05 8a2.5 2.5 0 0 1 4.064-1.41l1.7-1.133a4.5 4.5 0 0 0-7.787 2.543H7.005v2h1.027a4.5 4.5 0 0 0 7.788 2.543l-1.701-1.134a2.5 2.5 0 0 1-4.064-1.41h4.95v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Money Euro Box Fill
 * @see {@link https://remixicon.com/icon/money-euro-box-fill Remix Icon Docs}
 */
export { MoneyEuroBoxFill }
