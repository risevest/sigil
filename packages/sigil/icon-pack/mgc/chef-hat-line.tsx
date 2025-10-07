import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M5 13.744a4.501 4.501 0 0 1 2.852-8.537A5 5 0 0 1 12 3c1.728 0 3.25.877 4.148 2.207A4.5 4.5 0 0 1 19 13.744V18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zM9.22 6.87a3.001 3.001 0 0 1 5.56 0 1 1 0 0 0 1.44.481 2.5 2.5 0 1 1 1.639 4.623 1 1 0 0 0-.859.99V16H7v-3.035a1 1 0 0 0-.858-.99A2.5 2.5 0 1 1 7.78 7.352a1 1 0 0 0 1.44-.481M17 18a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'ChefHatLine'
/**
 * MingCute Icon: Chef Hat Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ChefHatLine = Icon
