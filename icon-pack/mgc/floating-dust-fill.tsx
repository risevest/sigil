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
          d="M4.5 4A1.5 1.5 0 0 1 6 2.5h1.5a1.5 1.5 0 1 1 0 3H6A1.5 1.5 0 0 1 4.5 4M10 4a1.5 1.5 0 0 1 1.5-1.5H20a1.5 1.5 0 0 1 0 3h-8.5A1.5 1.5 0 0 1 10 4M2.5 9A1.5 1.5 0 0 1 4 7.5h8.5a1.5 1.5 0 0 1 0 3H4A1.5 1.5 0 0 1 2.5 9M15 9a1.5 1.5 0 0 1 1.5-1.5H18a1.5 1.5 0 0 1 0 3h-1.5A1.5 1.5 0 0 1 15 9M4.5 14A1.5 1.5 0 0 1 6 12.5h1.5a1.5 1.5 0 0 1 0 3H6A1.5 1.5 0 0 1 4.5 14m5.5 0a1.5 1.5 0 0 1 1.5-1.5H20a1.5 1.5 0 0 1 0 3h-8.5A1.5 1.5 0 0 1 10 14m-7.5 5A1.5 1.5 0 0 1 4 17.5h8.5a1.5 1.5 0 0 1 0 3H4A1.5 1.5 0 0 1 2.5 19M15 19a1.5 1.5 0 0 1 1.5-1.5H18a1.5 1.5 0 0 1 0 3h-1.5A1.5 1.5 0 0 1 15 19"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FloatingDustFill'

/**
 * MingCute Icon: Floating Dust Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FloatingDustFill = memo(Icon)
