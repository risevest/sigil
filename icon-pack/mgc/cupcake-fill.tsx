import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill="none" fill-rule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 3a6.002 6.002 0 0 0-5.678 4.057 4.001 4.001 0 0 0-2.31 6.603c.015.088.041.175.08.26l2.464 5.337A3 3 0 0 0 9.28 21h5.44a3 3 0 0 0 2.724-1.743l2.464-5.338a1.02 1.02 0 0 0 .08-.259 4.001 4.001 0 0 0-2.31-6.603A6.002 6.002 0 0 0 12 3m5.209 11.995c-.07.003-.139.005-.209.005H7c-.07 0-.14-.002-.209-.005l1.58 3.424A1 1 0 0 0 9.28 19h5.44a1 1 0 0 0 .908-.58l1.58-3.425Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CupcakeFill'

/**
 * MingCute Icon: Cupcake Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CupcakeFill = memo(Icon)
