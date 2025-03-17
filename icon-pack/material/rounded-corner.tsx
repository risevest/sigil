import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 19H21V21H19V19ZM19 17H21V15H19V17ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM3 5H5V3H3V5ZM7 5H9V3H7V5ZM15 21H17V19H15V21ZM11 21H13V19H11V21ZM15 21H17V19H15V21ZM7 21H9V19H7V21ZM3 21H5V19H3V21ZM21 8C21 5.24 18.76 3 16 3H11V5H16C17.65 5 19 6.35 19 8V13H21V8Z" />
    </Svg>
  )
}

Icon.displayName = 'RoundedCorner'

/**
 * Material Icon: Rounded Corner
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rounded_corner Material Icon Docs}
 */
export const RoundedCorner = memo(Icon)
