import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 21H5V19H3V21ZM5 7H3V9H5V7ZM3 17H5V15H3V17ZM7 21H9V19H7V21ZM5 3H3V5H5V3ZM9 3H7V5H9V3ZM17 3H15V5H17V3ZM13 7H11V9H13V7ZM13 3H11V5H13V3ZM19 17H21V15H19V17ZM11 21H13V19H11V21ZM3 13H21V11H3V13ZM19 3V5H21V3H19ZM19 9H21V7H19V9ZM11 17H13V15H11V17ZM15 21H17V19H15V21ZM19 21H21V19H19V21Z" />
    </Svg>
  )
}

Icon.displayName = 'BorderHorizontal'

/**
 * Material Icon: Border Horizontal
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:border_horizontal Material Icon Docs}
 */
export const BorderHorizontal = memo(Icon)
