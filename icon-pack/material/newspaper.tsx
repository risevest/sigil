import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 3L20.33 4.67L18.67 3L17 4.67L15.33 3L13.67 4.67L12 3L10.33 4.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V3ZM11 19H4V13H11V19ZM20 19H13V17H20V19ZM20 15H13V13H20V15ZM20 11H4V8H20V11Z" />
    </Svg>
  )
}

Icon.displayName = 'Newspaper'

/**
 * Material Icon: Newspaper
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:newspaper Material Icon Docs}
 */
export const Newspaper = memo(Icon)
