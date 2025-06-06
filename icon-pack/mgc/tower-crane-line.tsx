import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M8.232 2.36a1 1 0 0 1 1.14-.288l.107.05 11 6a1 1 0 0 1-.366 1.872L20 10h-2v2.994a.3.3 0 0 0 .057.085c.058.067.146.142.26.216l.122.072A3 3 0 1 1 14 16a1 1 0 0 1 1.993-.117L16 16a1 1 0 1 0 1.479-.878 3.375 3.375 0 0 1-.94-.741 2.153 2.153 0 0 1-.53-1.192L16 13v-3h-4v11a1 1 0 0 1-.883.993L11 22H7a1 1 0 0 1-.993-.883L6 21V10H4a1 1 0 0 1-.844-1.537l.076-.103zM10 17.618l-2 1V20h2zm0-4-2 1v1.764l2-1zM10 10H8v2.382l2-1zM8 5.762 6.135 8H8zm2-1.077V8h6.078z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TowerCraneLine'

/**
 * MingCute Icon: Tower Crane Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TowerCraneLine = memo(Icon)
