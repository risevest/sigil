import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MoneyDollarBoxLine = /* @__PURE__ */ memo(function MoneyDollarBoxLine(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m1 2v14h16v-14zm4.5 9h5.5a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1v-2h2v2h2.5v2h-5.5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v2h-2v-2h-2.5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Money Dollar Box Line
 * @see {@link https://remixicon.com/icon/money-dollar-box-line Remix Icon Docs}
 */
export { MoneyDollarBoxLine }
