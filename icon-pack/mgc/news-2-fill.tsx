import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M20 3a1 1 0 0 1 .993.883L21 4v14a3 3 0 0 1-2.824 2.995L18 21H5.5a2.5 2.5 0 0 1-2.495-2.336L3 18.5V11a1 1 0 0 1 .883-.993L4 10h2V4a1 1 0 0 1 .883-.993L7 3zM6 12H5v6.5a.5.5 0 0 0 .992.09L6 18.5zm9 2h-5a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2m2-7h-7a1 1 0 0 0-.993.883L9 8v3a1 1 0 0 0 .883.993L10 12h7a1 1 0 0 0 .993-.883L18 11V8a1 1 0 0 0-.883-.993zm-1 2v1h-5V9z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'News2Fill'

/**
 * MingCute Icon: News 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const News2Fill = memo(Icon)
