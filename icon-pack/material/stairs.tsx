import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM18 6H13.58V9.33H11V12.66H8.42V16H6V18H10.42V14.67H13V11.34H15.58V8H18V6Z" />
    </Svg>
  )
}

Icon.displayName = 'Stairs'

/**
 * Material Icon: Stairs
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:stairs Material Icon Docs}
 */
export const Stairs = memo(Icon)
