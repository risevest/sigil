import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 16V17.26L9 14.26V11.09L11.7 8H16V2H10V6.9L7.3 10H3V16H8L15 19.5V22H21V16H15ZM12 4H14V6H12V4ZM7 14H5V12H7V14ZM19 20H17V18H19V20Z" />
    </Svg>
  )
}

Icon.displayName = 'Polyline'

/**
 * Material Icon: Polyline
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:polyline Material Icon Docs}
 */
export const Polyline = memo(Icon)
