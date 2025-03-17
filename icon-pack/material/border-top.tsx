import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 21H9V19H7V21ZM7 13H9V11H7V13ZM11 13H13V11H11V13ZM11 21H13V19H11V21ZM3 17H5V15H3V17ZM3 21H5V19H3V21ZM3 13H5V11H3V13ZM3 9H5V7H3V9ZM11 17H13V15H11V17ZM19 9H21V7H19V9ZM19 13H21V11H19V13ZM3 3V5H21V3H3ZM19 17H21V15H19V17ZM15 21H17V19H15V21ZM11 9H13V7H11V9ZM19 21H21V19H19V21ZM15 13H17V11H15V13Z" />
    </Svg>
  )
}

Icon.displayName = 'BorderTop'

/**
 * Material Icon: Border Top
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:border_top Material Icon Docs}
 */
export const BorderTop = memo(Icon)
