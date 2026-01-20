import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CoinFill = /* @__PURE__ */ memo(function CoinFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M23.005 12.003v2c0 3.314-4.925 6-11 6-5.967 0-10.824-2.591-10.995-5.823l-.005-.177v-2c0 3.313 4.925 6 11 6s11-2.687 11-6m-11-8c6.075 0 11 2.686 11 6s-4.925 6-11 6-11-2.687-11-6 4.925-6 11-6" />
    </Svg>
  )
})
/**
 * Remix Icon: Coin Fill
 * @see {@link https://remixicon.com/icon/coin-fill Remix Icon Docs}
 */
export { CoinFill }
