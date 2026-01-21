import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExchangeBoxFill = /* @__PURE__ */ memo(function ExchangeBoxFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m9 6h-4v2h9l-5-5zm-5 4 5 5v-3h4v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Exchange Box Fill
 * @see {@link https://remixicon.com/icon/exchange-box-fill Remix Icon Docs}
 */
export { ExchangeBoxFill }
