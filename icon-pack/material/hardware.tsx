import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 3L15 6V3H9C6.24 3 4 5.24 4 8H9V20C9 20.55 9.45 21 10 21H14C14.55 21 15 20.55 15 20V8L18 11H20V3H18ZM13 19H11V13H13V19ZM11 11V6H6.77C7.32 5.39 8.11 5 9 5H13V11H11Z" />
    </Svg>
  )
}

Icon.displayName = 'Hardware'

/**
 * Material Icon: Hardware
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:hardware Material Icon Docs}
 */
export const Hardware = memo(Icon)
