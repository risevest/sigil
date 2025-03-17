import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_6357)">
        <Path d="M1.97494 0.56543L0.564941 1.97543L4.95494 6.36543L7.16494 11.0254L5.81494 13.4754C5.65494 13.7554 5.56494 14.0854 5.56494 14.4354C5.56494 15.5354 6.46494 16.4354 7.56494 16.4354H15.0249L16.4049 17.8154C15.9049 18.1754 15.5749 18.7654 15.5749 19.4354C15.5749 20.5354 16.4649 21.4354 17.5649 21.4354C18.2349 21.4354 18.8249 21.1054 19.1849 20.5954L22.0249 23.4354L23.4349 22.0254L1.97494 0.56543ZM7.56494 14.4354L8.66494 12.4354H11.0249L13.0249 14.4354H7.56494ZM20.5649 3.43543H7.68494L9.68494 5.43543H18.8749L16.1149 10.4354H14.6749L16.6149 12.3754C17.1549 12.2354 17.6049 11.8854 17.8649 11.4054L21.4449 4.91543C21.8149 4.25543 21.3249 3.43543 20.5649 3.43543ZM7.56494 17.4354C6.46494 17.4354 5.57494 18.3354 5.57494 19.4354C5.57494 20.5354 6.46494 21.4354 7.56494 21.4354C8.66494 21.4354 9.56494 20.5354 9.56494 19.4354C9.56494 18.3354 8.66494 17.4354 7.56494 17.4354Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_6357">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'RemoveShoppingCart'

/**
 * Material Icon: Remove Shopping Cart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:remove_shopping_cart Material Icon Docs}
 */
export const RemoveShoppingCart = memo(Icon)
