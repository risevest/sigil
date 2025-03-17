import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 6.47L5.76 10H20V18H4V6.47ZM22 4H18L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V4Z" />
    </Svg>
  )
}

Icon.displayName = 'Movie'

/**
 * Material Icon: Movie
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:movie Material Icon Docs}
 */
export const Movie = memo(Icon)
