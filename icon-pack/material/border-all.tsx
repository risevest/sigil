import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3V21H21V3H3ZM11 19H5V13H11V19ZM11 11H5V5H11V11ZM19 19H13V13H19V19ZM19 11H13V5H19V11Z" />
    </Svg>
  )
}

Icon.displayName = 'BorderAll'

/**
 * Material Icon: Border All
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:border_all Material Icon Docs}
 */
export const BorderAll = memo(Icon)
