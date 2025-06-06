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
          d="M7.032 14.136a1 1 0 0 1 .707 1.225l-1.553 5.796a1 1 0 0 1-1.932-.518l1.553-5.795a1 1 0 0 1 1.225-.708m10.5 0a1 1 0 0 1 .707 1.225l-1.553 5.796a1 1 0 1 1-1.932-.518l1.553-5.795a1 1 0 0 1 1.225-.708m-7 0a1 1 0 0 1 .707 1.225l-1.553 5.796a1 1 0 0 1-1.932-.518l1.553-5.795a1 1 0 0 1 1.225-.707Zm2.275.708a1 1 0 0 1 1.956.403l-.024.114-1.553 5.796a1 1 0 0 1-1.955-.404l.023-.114zM11.5 2a6.502 6.502 0 0 1 6.086 4.212 6.002 6.002 0 0 1 2.43 10.246l.155-.58a3 3 0 0 0-4.647-3.213 2.994 2.994 0 0 0-3.5 0 2.994 2.994 0 0 0-3.5 0 3 3 0 0 0-4.648 1.66l-.553 2.063A5 5 0 0 1 5 8.416 6.5 6.5 0 0 1 11.5 2"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'HeavyRainstormFill'

/**
 * MingCute Icon: Heavy Rainstorm Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const HeavyRainstormFill = memo(Icon)
