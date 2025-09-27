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
          d="M3 4a2 2 0 0 1 2-2h2c.364 0 .706.097 1 .268A2 2 0 0 1 9 2h2c.727 0 1.364.388 1.714.969.21-.168.456-.296.732-.37l1.932-.517a2 2 0 0 1 2.45 1.414l4.14 15.455a2 2 0 0 1-1.414 2.45l-1.932.517a2 2 0 0 1-2.45-1.414L13 8.663V20a2 2 0 0 1-2 2H9a2 2 0 0 1-1-.268A2 2 0 0 1 7 22H5a2 2 0 0 1-2-2z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'Book5Fill'
/**
 * MingCute Icon: Book 5 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Book5Fill = Icon
