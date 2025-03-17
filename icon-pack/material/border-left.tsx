import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 21H13V19H11V21ZM11 17H13V15H11V17ZM11 5H13V3H11V5ZM11 9H13V7H11V9ZM11 13H13V11H11V13ZM7 21H9V19H7V21ZM7 5H9V3H7V5ZM7 13H9V11H7V13ZM3 21H5V3H3V21ZM19 9H21V7H19V9ZM15 21H17V19H15V21ZM19 17H21V15H19V17ZM19 3V5H21V3H19ZM19 13H21V11H19V13ZM19 21H21V19H19V21ZM15 13H17V11H15V13ZM15 5H17V3H15V5Z" />
    </Svg>
  )
}

Icon.displayName = 'BorderLeft'

/**
 * Material Icon: Border Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:border_left Material Icon Docs}
 */
export const BorderLeft = memo(Icon)
