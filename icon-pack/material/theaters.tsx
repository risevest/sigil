import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18ZM8 17H6V15H8V17ZM8 13H6V11H8V13ZM8 9H6V7H8V9ZM14 19H10V5H14V19ZM18 17H16V15H18V17ZM18 13H16V11H18V13ZM18 9H16V7H18V9Z" />
    </Svg>
  )
}

Icon.displayName = 'Theaters'

/**
 * Material Icon: Theaters
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:theaters Material Icon Docs}
 */
export const Theaters = memo(Icon)
