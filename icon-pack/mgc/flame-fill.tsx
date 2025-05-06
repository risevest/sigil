import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill="none" fill-rule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M7.747 5.592a24.263 24.263 0 0 1 3.672-3.406 1 1 0 0 1 1.162 0 25.16 25.16 0 0 1 3.672 3.406C18.584 8.256 20 11.088 20 14a8 8 0 1 1-16 0c0-2.912 1.415-5.743 3.747-8.408M12.005 21a3.694 3.694 0 0 0 3.694-3.694c0-3.167-3.694-5.806-3.694-5.806S8.31 14.139 8.31 17.306A3.694 3.694 0 0 0 12.004 21Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FlameFill'

/**
 * MingCute Icon: Flame Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FlameFill = memo(Icon)
