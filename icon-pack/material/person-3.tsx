import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.39 15.56C16.71 14.7 14.53 14 12 14C9.47 14 7.29 14.7 5.61 15.56C4.61 16.07 4 17.1 4 18.22V21H20V18.22C20 17.1 19.39 16.07 18.39 15.56ZM18 19H6V18.22C6 17.84 6.2 17.5 6.52 17.34C7.71 16.73 9.63 16 12 16C14.37 16 16.29 16.73 17.48 17.34C17.8 17.5 18 17.84 18 18.22V19Z" />
      <Path d="M10 13C10.17 13 13.83 13 14 13C15.66 13 17 11.66 17 10C17 9.27 16.73 8.6 16.29 8.08C16.42 7.75 16.5 7.38 16.5 7C16.5 5.75 15.73 4.68 14.64 4.23C14 3.48 13.06 3 12 3C10.94 3 10 3.48 9.36 4.23C8.27 4.68 7.5 5.75 7.5 7C7.5 7.38 7.58 7.75 7.71 8.08C7.27 8.6 7 9.27 7 10C7 11.66 8.34 13 10 13ZM9.24 9.37C10.11 8.33 9.5 7.37 9.5 7C9.5 6.59 9.74 6.23 10.12 6.08C10.41 5.96 10.67 5.77 10.87 5.54C11.04 5.33 11.42 5 12 5C12.58 5 12.96 5.33 13.13 5.53C13.33 5.77 13.59 5.95 13.88 6.07C14.26 6.23 14.5 6.59 14.5 7C14.5 7.37 13.89 8.33 14.76 9.37C15.34 10.06 14.8 11 14 11H10C9.2 11 8.66 10.06 9.24 9.37Z" />
    </Svg>
  )
}

Icon.displayName = 'Person3'

/**
 * Material Icon: Person 3
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:person_3 Material Icon Docs}
 */
export const Person3 = memo(Icon)
