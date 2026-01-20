import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const WalletFill = /* @__PURE__ */ memo(function WalletFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2.005 9h19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1zm1-6h15v4h-16V4a1 1 0 0 1 1-1m12 11v2h3v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Wallet Fill
 * @see {@link https://remixicon.com/icon/wallet-fill Remix Icon Docs}
 */
export { WalletFill }
