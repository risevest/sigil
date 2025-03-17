import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 5V19H10V5H14ZM20 3H18V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3ZM16 9V7H18V9H16ZM6 9V7H8V9H6ZM16 13V11H18V13H16ZM6 13V11H8V13H6ZM16 17V15H18V17H16ZM6 17V15H8V17H6Z" />
    </Svg>
  )
}

Icon.displayName = 'LocalMovies'

/**
 * Material Icon: Local Movies
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:local_movies Material Icon Docs}
 */
export const LocalMovies = memo(Icon)
