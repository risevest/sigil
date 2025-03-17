import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 9H5V7H3V9ZM3 5H5V3H3V5ZM7 21H9V19H7V21ZM7 13H9V11H7V13ZM3 13H5V11H3V13ZM3 21H5V19H3V21ZM3 17H5V15H3V17ZM7 5H9V3H7V5ZM19 17H21V15H19V17ZM11 21H13V3H11V21ZM19 21H21V19H19V21ZM19 13H21V11H19V13ZM19 3V5H21V3H19ZM19 9H21V7H19V9ZM15 5H17V3H15V5ZM15 21H17V19H15V21ZM15 13H17V11H15V13Z" />
    </Svg>
  )
}

Icon.displayName = 'BorderVertical'

/**
 * Material Icon: Border Vertical
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:border_vertical Material Icon Docs}
 */
export const BorderVertical = memo(Icon)
