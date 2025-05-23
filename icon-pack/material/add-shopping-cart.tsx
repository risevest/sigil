import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.9199 9.5H13.9199V6.5H16.9199V4.5H13.9199V1.5H11.9199V4.5H8.91992V6.5H11.9199V9.5ZM7.91992 18.5C6.81992 18.5 5.92992 19.4 5.92992 20.5C5.92992 21.6 6.81992 22.5 7.91992 22.5C9.01992 22.5 9.91992 21.6 9.91992 20.5C9.91992 19.4 9.01992 18.5 7.91992 18.5ZM17.9199 18.5C16.8199 18.5 15.9299 19.4 15.9299 20.5C15.9299 21.6 16.8199 22.5 17.9199 22.5C19.0199 22.5 19.9199 21.6 19.9199 20.5C19.9199 19.4 19.0199 18.5 17.9199 18.5ZM9.01992 13.5H16.4699C17.2199 13.5 17.8799 13.09 18.2199 12.47L22.0799 5.46L20.3399 4.5L16.4699 11.5H9.44992L5.18992 2.5H1.91992V4.5H3.91992L7.51992 12.09L6.16992 14.53C5.43992 15.87 6.39992 17.5 7.91992 17.5H19.9199V15.5H7.91992L9.01992 13.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AddShoppingCart'

/**
 * Material Icon: Add Shopping Cart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:add_shopping_cart Material Icon Docs}
 */
export const AddShoppingCart = memo(Icon)
