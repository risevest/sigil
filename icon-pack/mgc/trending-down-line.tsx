import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="nonzero">
        <Path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092Z" />
        <Path
          fill={color}
          d="M18.586 16H17a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1v-4a1 1 0 1 0-2 0v1.586l-5.293-5.293a1 1 0 0 0-1.414 0L9.5 13.086 3.707 7.293a1 1 0 0 0-1.414 1.414l6.5 6.5a1 1 0 0 0 1.414 0L14 11.414 18.586 16Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'TrendingDownLine'

/**
 * MingCute Icon: Trending Down Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const TrendingDownLine = memo(Icon)
