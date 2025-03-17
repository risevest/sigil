import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 19V3H4V19H2V21H22V19H20ZM13 5H14.5V19H13V5ZM11 19H9.5V5H11V19ZM6 5H7.5V19H6V5ZM16.5 19V5H18V19H16.5Z" />
    </Svg>
  )
}

Icon.displayName = 'VerticalShadesClosed'

/**
 * Material Icon: Vertical Shades Closed
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:vertical_shades_closed Material Icon Docs}
 */
export const VerticalShadesClosed = memo(Icon)
