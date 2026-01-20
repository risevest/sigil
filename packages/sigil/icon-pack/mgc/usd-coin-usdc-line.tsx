import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const UsdCoinUsdcLine = /* @__PURE__ */ memo(function UsdCoinUsdcLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M9.421 3.317a1 1 0 0 1-.532 1.31 8.003 8.003 0 0 0 0 14.746 1 1 0 1 1-.778 1.842A10 10 0 0 1 2 12c0-4.145 2.522-7.7 6.11-9.215a1 1 0 0 1 1.311.532m6.468-.532A10 10 0 0 1 22 12c0 4.145-2.522 7.699-6.11 9.215a1 1 0 0 1-.78-1.842 8.003 8.003 0 0 0 0-14.746 1 1 0 0 1 .78-1.842ZM12 6a1 1 0 0 1 1 1v1h2a1 1 0 1 1 0 2h-2v1h1a2.5 2.5 0 0 1 0 5h-1v1a1 1 0 1 1-2 0v-1H9a1 1 0 1 1 0-2h2v-1h-1a2.5 2.5 0 0 1 0-5h1V7a1 1 0 0 1 1-1m2 7h-1v1h1a.5.5 0 1 0 0-1m-3-3h-1a.5.5 0 0 0 0 1h1z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Usd Coin Usdc Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { UsdCoinUsdcLine }
