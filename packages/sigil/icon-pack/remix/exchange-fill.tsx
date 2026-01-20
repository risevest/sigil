import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ExchangeFill = /* @__PURE__ */ memo(function ExchangeFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m0-13h-4v2h9l-5-5zm-5 4 5 5v-3h4v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Exchange Fill
 * @see {@link https://remixicon.com/icon/exchange-fill Remix Icon Docs}
 */
export { ExchangeFill }
