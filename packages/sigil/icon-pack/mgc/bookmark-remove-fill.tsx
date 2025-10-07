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
          d="M16 2a3 3 0 0 1 3 3v11h-3a3 3 0 0 0-2.997 2.87L12 18.202l-4.668 3.112C6.335 21.978 5 21.264 5 20.066V5a3 3 0 0 1 3-3zm6 16a1 1 0 0 1 .117 1.993L22 20h-6a1 1 0 0 1-.117-1.993L16 18z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'BookmarkRemoveFill'
/**
 * MingCute Icon: Bookmark Remove Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const BookmarkRemoveFill = Icon
