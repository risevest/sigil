import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 18C6.9 18 6.01 18.9 6.01 20C6.01 21.1 6.9 22 8 22C9.1 22 10 21.1 10 20C10 18.9 9.1 18 8 18ZM18 18C16.9 18 16.01 18.9 16.01 20C16.01 21.1 16.9 22 18 22C19.1 22 20 21.1 20 20C20 18.9 19.1 18 18 18ZM9.1 13H16.55C17.3 13 17.96 12.59 18.3 11.97L22 4.96L20.25 4L16.55 11H9.53L5.27 2H2V4H4L7.6 11.59L6.25 14.03C5.52 15.37 6.48 17 8 17H20V15H8L9.1 13ZM13 2L17 6L13 10L11.59 8.59L13.17 7H9V5H13.17L11.58 3.41L13 2Z" />
    </Svg>
  )
}

Icon.displayName = 'ShoppingCartCheckout'

/**
 * Material Icon: Shopping Cart Checkout
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:shopping_cart_checkout Material Icon Docs}
 */
export const ShoppingCartCheckout = memo(Icon)
