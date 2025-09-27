import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M21.093 6.75c2.9 5.022 1.179 11.444-3.843 14.344-4.183 2.414-9.332 1.624-12.613-1.604a1.5 1.5 0 0 1 2.104-2.139 7.5 7.5 0 1 0-2.031-7.117l.518-.134c1.522-.398 2.644 1.41 1.61 2.598l-2.25 2.587c-.826.949-2.423.626-2.754-.646A10.5 10.5 0 0 1 6.75 2.907c5.023-2.9 11.445-1.179 14.344 3.843ZM12 5.5a1.5 1.5 0 0 1 1.493 1.356L13.5 7v4.379l2.06 2.06a1.5 1.5 0 0 1-2.007 2.225l-.114-.103-2.5-2.5a1.5 1.5 0 0 1-.432-.913L10.5 12V7A1.5 1.5 0 0 1 12 5.5"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'HistoryAnticlockwiseFill'
/**
 * MingCute Icon: History Anticlockwise Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HistoryAnticlockwiseFill = Icon
