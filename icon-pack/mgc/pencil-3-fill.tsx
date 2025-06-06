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
          d="M18.293 17.293a1 1 0 0 1 1.497 1.32l-.083.094-1.5 1.5a3.121 3.121 0 0 1-4.414 0 1.122 1.122 0 0 0-1.488-.087l-.098.087-.5.5a1 1 0 0 1-1.497-1.32l.083-.094.5-.5a3.121 3.121 0 0 1 4.414 0 1.122 1.122 0 0 0 1.488.087l.098-.087zm-1.81-13.31A2.5 2.5 0 0 1 20.14 7.39l-.122.13L8.442 19.095a1.501 1.501 0 0 1-.505.333l-.145.049-2.837.807a1.001 1.001 0 0 1-1.262-1.13l.025-.107.807-2.838a1.5 1.5 0 0 1 .28-.536l.102-.114z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Pencil3Fill'

/**
 * MingCute Icon: Pencil 3 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Pencil3Fill = memo(Icon)
