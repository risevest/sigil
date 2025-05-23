import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.84 5.22C20.79 5.1 20.73 4.99 20.66 4.88C20.52 4.67 20.33 4.48 20.12 4.34C20.01 4.27 19.9 4.21 19.78 4.16C19.54 4.06 19.28 4 19 4H18V2H16V4H8V2H6V4H5C4.58 4 4.2 4.13 3.88 4.34C3.67 4.48 3.48 4.67 3.34 4.88C3.27 4.99 3.21 5.1 3.16 5.22C3.06 5.46 3 5.72 3 6V20C3 21.1 3.89 22 5 22H19C19.28 22 19.54 21.94 19.78 21.84C19.9 21.79 20.01 21.73 20.12 21.66C20.33 21.52 20.52 21.33 20.66 21.12C20.87 20.8 21 20.41 21 20V6C21 5.72 20.94 5.46 20.84 5.22ZM5 20V6H19V20H5ZM12 13.88C9.97 13.88 6 14.96 6 17.46V19H18V17.47C18 14.96 14.03 13.88 12 13.88ZM8.31 17C9 16.44 10.69 15.88 12 15.88C13.31 15.88 15.01 16.44 15.69 17H8.31ZM12 13C13.65 13 15 11.65 15 10C15 8.35 13.65 7 12 7C10.35 7 9 8.35 9 10C9 11.65 10.35 13 12 13ZM12 9C12.55 9 13 9.45 13 10C13 10.55 12.55 11 12 11C11.45 11 11 10.55 11 10C11 9.45 11.45 9 12 9Z" />
    </Svg>
  )
}

Icon.displayName = 'PermContactCalendar'

/**
 * Material Icon: Perm Contact Calendar
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:perm_contact_calendar Material Icon Docs}
 */
export const PermContactCalendar = memo(Icon)
