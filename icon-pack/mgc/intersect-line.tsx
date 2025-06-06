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
          d="M5 3a2 2 0 0 0-2 2v.75a1 1 0 0 0 2 0V5h.75a1 1 0 0 0 0-2zm3.75 0a1 1 0 0 0 0 2h1.5a1 1 0 1 0 0-2zm4.5 0a1 1 0 1 0 0 2H14v.667a1 1 0 1 0 2 0V5a2 2 0 0 0-2-2zm2.707 5.043a1 1 0 0 0-1.9-.043H10a2 2 0 0 0-2 2v4.057a1 1 0 0 0 .043 1.9 1 1 0 0 0 1.9.043H14a2 2 0 0 0 2-2V9.943a1 1 0 0 0-.043-1.9M10 10h4v4h-4zM5 8.75a1 1 0 0 0-2 0v1.5a1 1 0 1 0 2 0zm0 4.5a1 1 0 1 0-2 0V14a2 2 0 0 0 2 2h.667a1 1 0 1 0 0-2H5zM19 21a2 2 0 0 0 2-2v-.75a1 1 0 1 0-2 0V19h-.75a1 1 0 1 0 0 2zm-3.75 0a1 1 0 1 0 0-2h-1.5a1 1 0 1 0 0 2zm-4.5 0a1 1 0 1 0 0-2H10v-.667a1 1 0 1 0-2 0V19a2 2 0 0 0 2 2zM19 15.25a1 1 0 1 0 2 0v-1.5a1 1 0 1 0-2 0zm0-4.5a1 1 0 1 0 2 0V10a2 2 0 0 0-2-2h-.667a1 1 0 1 0 0 2H19z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'IntersectLine'

/**
 * MingCute Icon: Intersect Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const IntersectLine = memo(Icon)
