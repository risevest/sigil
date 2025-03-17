import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_2403_4656)">
        <Path d="M1.15997 20.8447H16.17V21.8247C16.17 22.3847 15.72 22.8347 15.16 22.8347H2.16997C1.60997 22.8347 1.15997 22.3847 1.15997 21.8247V20.8447ZM20.65 23.1547L16.16 18.6747V18.8447H1.15997V16.8447H14.33L12.33 14.8447H1.15997C1.15997 11.6047 3.61997 9.67473 6.53997 9.05473L0.839966 3.35473L2.25997 1.94473L22.06 21.7447L20.65 23.1547ZM10.33 12.8447L8.32997 10.8447C6.90997 10.9047 4.80997 11.4047 3.77997 12.8447H10.33ZM23.16 4.84473H18.16V0.844727H16.16V4.84473H11.16L11.39 6.84473H20.95L19.95 16.8147L21.78 18.6447L23.16 4.84473Z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2403_4656">
          <Rect width="24" height="24" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'NoFood'

/**
 * Material Icon: No Food
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:no_food Material Icon Docs}
 */
export const NoFood = memo(Icon)
