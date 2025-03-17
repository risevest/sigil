import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.9 20.4796L3.51998 2.09961L2.09998 3.50961L10.33 11.7396L11.71 13.2896V18.2896H6.70998V20.2896H18.71V20.1196L20.49 21.8996L21.9 20.4796ZM13.71 18.2896V15.1196L16.88 18.2896H13.71ZM8.53998 4.28961L6.53998 2.28961H21.71V4.28961L15.51 11.2596L14.09 9.83961L15.48 8.28961H12.54L10.54 6.28961H17.28L19.06 4.28961H8.53998Z" />
    </Svg>
  )
}

Icon.displayName = 'NoDrinks'

/**
 * Material Icon: No Drinks
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:no_drinks Material Icon Docs}
 */
export const NoDrinks = memo(Icon)
