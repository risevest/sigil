import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 21H9V19H7V21ZM3 5H5V3H3V5ZM7 5H9V3H7V5ZM7 13H9V11H7V13ZM3 21H5V19H3V21ZM11 21H13V19H11V21ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM11 17H13V15H11V17ZM15 13H17V11H15V13ZM19 3V21H21V3H19ZM15 21H17V19H15V21ZM15 5H17V3H15V5ZM11 13H13V11H11V13ZM11 5H13V3H11V5ZM11 9H13V7H11V9Z" />
    </Svg>
  )
}

Icon.displayName = 'BorderRight'

/**
 * Material Icon: Border Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:border_right Material Icon Docs}
 */
export const BorderRight = memo(Icon)
