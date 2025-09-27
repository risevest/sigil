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
          d="M12 17.618V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-.382zM8.232 2.36a1 1 0 0 1 1.14-.288l.107.05 11 6a1 1 0 0 1-.366 1.872L20 10h-2v2.994a.3.3 0 0 0 .057.085c.058.067.146.142.26.216l.122.072A3 3 0 1 1 14 16a1 1 0 0 1 1.993-.117L16 16a1 1 0 1 0 1.479-.878 3.4 3.4 0 0 1-.94-.741 2.15 2.15 0 0 1-.53-1.192L16 13v-3h-4v.382l-6 3V10H4a1 1 0 0 1-.844-1.537l.076-.103zM12 12.618v2.764l-6 3v-2.764z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'TowerCraneFill'
/**
 * MingCute Icon: Tower Crane Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TowerCraneFill = Icon
