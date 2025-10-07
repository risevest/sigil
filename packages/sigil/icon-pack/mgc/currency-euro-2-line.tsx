import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8.73 9c.958-1.813 2.752-3 4.741-3 1.465 0 2.807.632 3.802 1.686a1 1 0 0 0 1.454-1.372C17.387 4.894 15.533 4 13.471 4c-3.179 0-5.827 2.097-6.926 5H5a1 1 0 0 0 0 2h1.058a8.7 8.7 0 0 0 0 2H5a1 1 0 1 0 0 2h1.545c1.099 2.903 3.747 5 6.926 5 2.062 0 3.917-.894 5.256-2.314a1 1 0 0 0-1.454-1.372C16.278 17.368 14.936 18 13.47 18c-1.989 0-3.783-1.187-4.741-3H13a1 1 0 1 0 0-2H8.075a6.8 6.8 0 0 1 0-2H13a1 1 0 1 0 0-2z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'CurrencyEuro2Line'
/**
 * MingCute Icon: Currency Euro 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyEuro2Line = Icon
