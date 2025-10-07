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
          d="M18 3a3 3 0 0 1 2.995 2.824L21 6v6h-6a3 3 0 0 0-2.995 2.824L12 15v6H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm2.883 11a3 3 0 0 1-.613 1.132l-.149.16-4.828 4.83a3 3 0 0 1-1.088.694l-.205.067V15a1 1 0 0 1 .883-.993L15 14z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'StickerFill'
/**
 * MingCute Icon: Sticker Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const StickerFill = Icon
