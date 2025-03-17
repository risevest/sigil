import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z" />
    </Svg>
  )
}

Icon.displayName = 'Square'

/**
 * Material Icon: Square
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:square Material Icon Docs}
 */
export const Square = memo(Icon)
