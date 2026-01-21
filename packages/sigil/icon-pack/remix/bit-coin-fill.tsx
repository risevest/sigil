import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BitCoinFill = /* @__PURE__ */ memo(function BitCoinFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10m-1-6v2h2v-2h1a2.5 2.5 0 0 0 2-4 2.5 2.5 0 0 0-2-4h-1v-2h-2v2h-3v8zm-1-3h4a.5.5 0 0 1 0 1h-4zm0-3h4a.5.5 0 0 1 0 1h-4z" />
    </Svg>
  )
})
/**
 * Remix Icon: Bit Coin Fill
 * @see {@link https://remixicon.com/icon/bit-coin-fill Remix Icon Docs}
 */
export { BitCoinFill }
