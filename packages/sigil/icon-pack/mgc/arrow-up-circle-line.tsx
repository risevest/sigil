import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.105.074.014.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.092.01-.009.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-.707 3.046a1 1 0 0 1 1.32-.083l.094.083 3.536 3.535a1 1 0 0 1-1.32 1.498l-.094-.083-1.83-1.83v6.077a1 1 0 0 1-1.992.116L11 16.243v-6.076l-1.828 1.829a1 1 0 0 1-1.498-1.32l.084-.095z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'ArrowUpCircleLine'
/**
 * MingCute Icon: Arrow Up Circle Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ArrowUpCircleLine = Icon
