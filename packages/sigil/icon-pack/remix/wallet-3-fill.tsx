import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Wallet3Fill = /* @__PURE__ */ memo(function Wallet3Fill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22.005 6h-7a6 6 0 0 0 0 12h7v2a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7 2h8v8h-8a4 4 0 1 1 0-8m0 3v2h3v-2z" />
    </Svg>
  )
})
/**
 * Remix Icon: Wallet 3 Fill
 * @see {@link https://remixicon.com/icon/wallet-3-fill Remix Icon Docs}
 */
export { Wallet3Fill }
