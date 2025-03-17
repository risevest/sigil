import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 2.8252C14.76 2.8252 13.09 3.6352 12 4.9152C10.91 3.6352 9.24 2.8252 7.5 2.8252C4.42 2.8252 2 5.2452 2 8.3252C2 12.1052 5.4 15.1852 10.55 19.8652L12 21.1752L13.45 19.8552C18.6 15.1852 22 12.1052 22 8.3252C22 5.2452 19.58 2.8252 16.5 2.8252ZM12.1 18.3752L12 18.4752L11.9 18.3752C7.14 14.0652 4 11.2152 4 8.3252C4 6.3252 5.5 4.8252 7.5 4.8252C9.04 4.8252 10.54 5.8152 11.07 7.1852H12.94C13.46 5.8152 14.96 4.8252 16.5 4.8252C18.5 4.8252 20 6.3252 20 8.3252C20 11.2152 16.86 14.0652 12.1 18.3752Z" />
    </Svg>
  )
}

Icon.displayName = 'FavoriteBorder'

/**
 * Material Icon: Favorite Border
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:favorite_border Material Icon Docs}
 */
export const FavoriteBorder = memo(Icon)
