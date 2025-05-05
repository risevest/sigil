import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg height={size} width={size} {...otherProps}>
      <G fill={color} fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path fill={color} d="M11 13v2H9v-2z" fillRule="nonzero" />
        <Path
          fill={color}
          d="M6.48 4a2 2 0 0 0-1.561.75l-3.05 3.813C1.083 9.545 1.783 11 3.04 11H4v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7h2v8a1 1 0 1 0 2 0v-8h.96c1.258 0 1.957-1.455 1.171-2.437l-3.05-3.812A2 2 0 0 0 17.52 4zM8 11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ShopFill'

/**
 * MingCute Icon: Shop_fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ShopFill = memo(Icon)
