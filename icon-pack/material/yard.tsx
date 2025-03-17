import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 13C14.69 13 12 15.69 12 19C15.31 19 18 16.31 18 13ZM6 13C6 16.31 8.69 19 12 19C12 15.69 9.31 13 6 13ZM8 11.03C8 11.89 8.7 12.59 9.56 12.59C9.89 12.59 10.19 12.49 10.45 12.31L10.44 12.43C10.44 13.29 11.14 13.99 12 13.99C12.86 13.99 13.56 13.29 13.56 12.43L13.55 12.31C13.8 12.48 14.11 12.59 14.44 12.59C15.3 12.59 16 11.89 16 11.03C16 10.41 15.63 9.87 15.11 9.62C15.63 9.38 16 8.84 16 8.22C16 7.36 15.3 6.66 14.44 6.66C14.11 6.66 13.81 6.76 13.55 6.94L13.56 6.82C13.56 5.96 12.86 5.26 12 5.26C11.14 5.26 10.44 5.96 10.44 6.82L10.45 6.94C10.2 6.76 9.89 6.66 9.56 6.66C8.7 6.66 8 7.36 8 8.22C8 8.84 8.37 9.38 8.89 9.63C8.37 9.87 8 10.41 8 11.03ZM12 8.06C12.86 8.06 13.56 8.76 13.56 9.62C13.56 10.48 12.86 11.18 12 11.18C11.14 11.18 10.44 10.48 10.44 9.62C10.44 8.76 11.14 8.06 12 8.06ZM20 4V20H4V4H20ZM20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2Z" />
    </Svg>
  )
}

Icon.displayName = 'Yard'

/**
 * Material Icon: Yard
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:yard Material Icon Docs}
 */
export const Yard = memo(Icon)
