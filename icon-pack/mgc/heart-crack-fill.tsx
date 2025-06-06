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
          d="M11.94 4.29c-2.06-1.636-4.493-1.62-6.434-.489-2.095 1.221-3.569 3.7-3.504 6.592C2.14 16.5 10.5 21 12 21s9.861-4.5 9.998-10.607c.065-2.892-1.409-5.37-3.504-6.592a5.755 5.755 0 0 0-2.75-.799L11.37 7.957l2.336 2.336a1 1 0 0 1 .125 1.262l-2 3a1 1 0 0 1-1.664-1.11l1.545-2.318-2.42-2.42a1 1 0 0 1-.043-1.369z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HeartCrackFill'

/**
 * MingCute Icon: Heart Crack Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HeartCrackFill = memo(Icon)
