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
          d="M20.132 5.99a2.988 2.988 0 0 0-1.345-.777 3 3 0 1 0-5.606 2.07l-.808.81a5.675 5.675 0 0 0-.034-.005c-.927-.117-1.956-.048-2.969.152-2 .396-4.149 1.347-5.502 2.7-1.366 1.366-1.93 2.978-1.786 4.591.142 1.583.954 3.062 2.14 4.247 1.186 1.186 2.664 1.999 4.247 2.14 1.613.145 3.225-.42 4.592-1.786 1.352-1.353 2.304-3.5 2.7-5.502.2-1.012.268-2.042.152-2.968a3.95 3.95 0 0 0-.005-.034l.809-.81a3.001 3.001 0 0 0 3.415-4.828"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ChickenFill'

/**
 * MingCute Icon: Chicken Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ChickenFill = memo(Icon)
