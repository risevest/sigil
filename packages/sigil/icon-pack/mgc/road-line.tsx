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
          d="M8.243 3.03a1 1 0 0 1 .727 1.213l-4 16a1 1 0 1 1-1.94-.485l4-16a1 1 0 0 1 1.213-.728m8.727.727 4 16a1 1 0 1 1-1.94.485l-4-16a1 1 0 1 1 1.94-.485M12 17a1 1 0 0 1 .993.883L13 18v2a1 1 0 0 1-1.993.117L11 20v-2a1 1 0 0 1 1-1m0-7a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m0-7a1 1 0 0 1 .993.883L13 4v2a1 1 0 0 1-1.993.117L11 6V4a1 1 0 0 1 1-1"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'RoadLine'
/**
 * MingCute Icon: Road Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const RoadLine = Icon
