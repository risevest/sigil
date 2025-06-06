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
          d="M5.706 3.53A1.5 1.5 0 0 1 7.47 4.705l1.692 8.459 1.382-5.529a1.5 1.5 0 0 1 2.91 0l1.382 5.529 1.692-8.46a1.5 1.5 0 0 1 2.942.59L18.83 8.5H19a1.5 1.5 0 0 1 0 3h-.77l-.2 1H19a1.5 1.5 0 0 1 0 3h-1.57l-.785 3.922c-.355 1.778-2.876 1.838-3.316.079L12 14.185 10.67 19.5c-.439 1.76-2.96 1.7-3.315-.079L6.57 15.5H5a1.5 1.5 0 1 1 0-3h.97l-.2-1H5a1.5 1.5 0 1 1 0-3h.17l-.64-3.206A1.5 1.5 0 0 1 5.705 3.53"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'CurrencyWon2Fill'

/**
 * MingCute Icon: Currency Won 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const CurrencyWon2Fill = memo(Icon)
