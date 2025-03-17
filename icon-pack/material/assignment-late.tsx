import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 16H13V18H11V16ZM11 8H13V14H11V8ZM19 4H14.82C14.4 2.84 13.3 2 12 2C10.7 2 9.6 2.84 9.18 4H5C4.86 4 4.73 4.01 4.6 4.04C4.21 4.12 3.86 4.32 3.59 4.59C3.41 4.77 3.26 4.99 3.16 5.23C3.06 5.46 3 5.72 3 6V20C3 20.27 3.06 20.54 3.16 20.78C3.26 21.02 3.41 21.23 3.59 21.42C3.86 21.69 4.21 21.89 4.6 21.97C4.73 21.99 4.86 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM12 3.75C12.41 3.75 12.75 4.09 12.75 4.5C12.75 4.91 12.41 5.25 12 5.25C11.59 5.25 11.25 4.91 11.25 4.5C11.25 4.09 11.59 3.75 12 3.75ZM19 20H5V6H19V20Z" />
    </Svg>
  )
}

Icon.displayName = 'AssignmentLate'

/**
 * Material Icon: Assignment Late
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:assignment_late Material Icon Docs}
 */
export const AssignmentLate = memo(Icon)
