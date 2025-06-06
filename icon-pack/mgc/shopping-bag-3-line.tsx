import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M16.586 3A2 2 0 0 1 18 3.586L20.414 6A2 2 0 0 1 21 7.414V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7.414A2 2 0 0 1 3.586 6L6 3.586A2 2 0 0 1 7.414 3zM19 9H5v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zm-4 2a1 1 0 0 1 1 1 4 4 0 0 1-8 0 1 1 0 1 1 2 0 2 2 0 0 0 3.995.15L14 12a1 1 0 0 1 1-1m1.586-6H7.414l-2 2h13.172z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ShoppingBag3Line'

/**
 * MingCute Icon: Shopping Bag 3 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ShoppingBag3Line = memo(Icon)
