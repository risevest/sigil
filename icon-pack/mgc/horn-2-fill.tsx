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
          d="M20.255 5.52c-.331-1.087-1.464-1.504-2.394-1.194L7 7.946 5.632 7.49A2 2 0 0 0 3 9.388v4.225a2 2 0 0 0 2.632 1.897L7 15.054l.778.26-.269.627a2 2 0 0 0 1.206 2.685l5.096 1.698a2 2 0 0 0 2.47-1.109l.4-.933 1.18.393c.93.31 2.063-.108 2.394-1.195.325-1.064.745-3.015.745-5.98 0-2.965-.42-4.916-.745-5.98m-5.477 12.127-5.096-1.699-.335.78 5.096 1.7z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Horn2Fill'

/**
 * MingCute Icon: Horn 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Horn2Fill = memo(Icon)
