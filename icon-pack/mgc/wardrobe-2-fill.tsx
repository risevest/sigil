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
          d="M11 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h5zm-3 9a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm10 11h-5v-4h7v2a2 2 0 0 1-2 2m-5-6h7v-3h-7zm7-5h-7V8h7zm-7-5h7V4a2 2 0 0 0-2-2h-5z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Wardrobe2Fill'

/**
 * MingCute Icon: Wardrobe 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Wardrobe2Fill = memo(Icon)
