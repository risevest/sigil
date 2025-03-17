import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 19V3H4V19H2V21H22V19H20ZM14 5V19H10V5H14ZM6 5H8V19H6V5ZM16 19V5H18V19H16Z" />
    </Svg>
  )
}

Icon.displayName = 'VerticalShades'

/**
 * Material Icon: Vertical Shades
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vertical_shades Material Icon Docs}
 */
export const VerticalShades = memo(Icon)
