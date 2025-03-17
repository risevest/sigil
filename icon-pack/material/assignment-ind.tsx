import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 4H14.82C14.4 2.84 13.3 2 12 2C10.7 2 9.6 2.84 9.18 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM12 3.75C12.22 3.75 12.41 3.85 12.55 4C12.67 4.13 12.75 4.31 12.75 4.5C12.75 4.91 12.41 5.25 12 5.25C11.59 5.25 11.25 4.91 11.25 4.5C11.25 4.31 11.33 4.13 11.45 4C11.59 3.85 11.78 3.75 12 3.75ZM19 20H5V6H19V20ZM12 7C10.35 7 9 8.35 9 10C9 11.65 10.35 13 12 13C13.65 13 15 11.65 15 10C15 8.35 13.65 7 12 7ZM12 11C11.45 11 11 10.55 11 10C11 9.45 11.45 9 12 9C12.55 9 13 9.45 13 10C13 10.55 12.55 11 12 11ZM6 17.47V19H18V17.47C18 14.97 14.03 13.89 12 13.89C9.97 13.89 6 14.96 6 17.47ZM8.31 17C9 16.44 10.69 15.88 12 15.88C13.31 15.88 15.01 16.44 15.69 17H8.31Z" />
    </Svg>
  )
}

Icon.displayName = 'AssignmentInd'

/**
 * Material Icon: Assignment Ind
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:assignment_ind Material Icon Docs}
 */
export const AssignmentInd = memo(Icon)
