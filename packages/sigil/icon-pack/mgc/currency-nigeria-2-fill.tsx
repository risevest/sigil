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
          d="M8.5 2.5a1.5 1.5 0 0 1 1.374.899L12.106 8.5H14.5V4a1.5 1.5 0 0 1 3 0v4.5H19a1.5 1.5 0 0 1 0 3h-1.5v2H19a1.5 1.5 0 0 1 0 3h-1.5V20a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.374-.899L12.332 16.5H9.5V20a1.5 1.5 0 0 1-3 0v-3.5H5a1.5 1.5 0 0 1 0-3h1.5v-2H5a1.5 1.5 0 0 1 0-3h1.5V4A1.5 1.5 0 0 1 8 2.5zm1.644 9H9.5v2h1.519zm4.356 0h-1.082l.876 2h.206z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'CurrencyNigeria2Fill'
/**
 * MingCute Icon: Currency Nigeria 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyNigeria2Fill = Icon
