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
          d="M14 2a2 2 0 0 1 1.994 1.85L16 4h1a2 2 0 0 1 1.994 1.85L19 6v3.003a2 2 0 0 1 1.894 2.048l-.009.148-.71 7.1a3 3 0 0 1-2.808 2.696L17.19 21H6.81a3 3 0 0 1-2.962-2.526l-.023-.175-.71-7.1a2 2 0 0 1 1.739-2.183L5 9.003V5a2 2 0 0 1 1.85-1.995L7 3h1a2 2 0 0 1 1.994 1.85L10 5h1V4a2 2 0 0 1 1.85-1.995L13 2zm-3 5h-1v4.465c.31.18.645.318 1 .41zm3-3h-1v7.874c.355-.091.69-.23 1-.409zM8 5H7v4.014c.382.046.72.198 1 .411zm9 1h-1v3.425c.233-.177.507-.313.813-.38l.187-.03z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FriesFill'

/**
 * MingCute Icon: Fries Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FriesFill = memo(Icon)
