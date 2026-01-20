import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const CurrencyRupee2Fill = /* @__PURE__ */ memo(function CurrencyRupee2Fill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M7 6.5a1.5 1.5 0 1 1 0-3h11a1.5 1.5 0 0 1 0 3h-3.522a6.5 6.5 0 0 1 .848 2H18a1.5 1.5 0 0 1 0 3h-2.674a6.51 6.51 0 0 1-4.162 4.631l3.708 2.648a1.5 1.5 0 0 1-1.744 2.442l-6.981-4.987a1.48 1.48 0 0 1-.646-1.18 1.52 1.52 0 0 1 .351-1.02c.292-.347.711-.54 1.168-.534H9a3.5 3.5 0 0 0 3.163-2H7a1.5 1.5 0 0 1 0-3h5.163A3.5 3.5 0 0 0 9 6.5z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Currency Rupee 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { CurrencyRupee2Fill }
