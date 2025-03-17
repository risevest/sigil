import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.24 13.65C15.07 13.13 13.63 12.75 12 12.75C10.37 12.75 8.93 13.14 7.76 13.65C6.68 14.13 6 15.21 6 16.39V18H18V16.39C18 15.21 17.32 14.13 16.24 13.65ZM8.07 16C8.16 15.77 8.34 15.58 8.56 15.48C9.66 14.99 10.82 14.75 11.99 14.75C13.17 14.75 14.32 15 15.42 15.48C15.65 15.58 15.82 15.77 15.91 16H8.07Z" />
      <Path d="M1.22 14.58C0.48 14.9 0 15.62 0 16.43V18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58Z" />
      <Path d="M22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H24V16.43C24 15.62 23.52 14.9 22.78 14.58Z" />
      <Path d="M12 12C13.66 12 15 10.66 15 9C15 7.34 13.66 6 12 6C10.34 6 9 7.34 9 9C9 10.66 10.34 12 12 12ZM12 8C12.55 8 13 8.45 13 9C13 9.55 12.55 10 12 10C11.45 10 11 9.55 11 9C11 8.45 11.45 8 12 8Z" />
      <Path d="M3.9999 8.49687L1.49677 11L3.9999 13.5031L6.50303 11L3.9999 8.49687Z" />
      <Path d="M20 9L17.5 13H22.5L20 9Z" />
    </Svg>
  )
}

Icon.displayName = 'Groups3'

/**
 * Material Icon: Groups 3
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:groups_3 Material Icon Docs}
 */
export const Groups3 = memo(Icon)
