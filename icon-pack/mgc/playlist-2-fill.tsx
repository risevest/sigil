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
          d="M17.758 5.591 19 5.281v2.938l-2 .5V6.562a1 1 0 0 1 .758-.97Zm1.727 4.568L17 10.782V17.5a3.5 3.5 0 1 1-2-3.163V6.562a3 3 0 0 1 2.272-2.91l1.864-.467A1.5 1.5 0 0 1 21 4.64v3.58a2 2 0 0 1-1.515 1.94ZM4 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Playlist2Fill'

/**
 * MingCute Icon: Playlist 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Playlist2Fill = memo(Icon)
