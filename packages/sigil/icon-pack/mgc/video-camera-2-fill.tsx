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
          d="M11.762 7.445A1 1 0 0 0 10.93 7H6a1 1 0 1 1 0-2h4.93a3 3 0 0 1 2.496 1.336L14.536 8H15a3 3 0 0 1 3 3v.21l1.713-1.056A1.5 1.5 0 0 1 22 11.43v5.138a1.5 1.5 0 0 1-2.287 1.277L18 16.79V17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h7.132z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'VideoCamera2Fill'

/**
 * MingCute Icon: Video Camera 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const VideoCamera2Fill = memo(Icon)
