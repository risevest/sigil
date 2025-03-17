import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 4C19.89 3.65 18.67 3.5 17.5 3.5C15.55 3.5 13.45 3.9 12 5C10.55 3.9 8.45 3.5 6.5 3.5C4.55 3.5 2.45 3.9 1 5V19.65C1 19.9 1.25 20.15 1.5 20.15C1.6 20.15 1.65 20.1 1.75 20.1C3.1 19.45 5.05 19 6.5 19C8.45 19 10.55 19.4 12 20.5C13.35 19.65 15.8 19 17.5 19C19.15 19 20.85 19.3 22.25 20.05C22.35 20.1 22.4 20.1 22.5 20.1C22.75 20.1 23 19.85 23 19.6V5C22.4 4.55 21.75 4.25 21 4ZM21 17.5C19.9 17.15 18.7 17 17.5 17C15.8 17 13.35 17.65 12 18.5V7C13.35 6.15 15.8 5.5 17.5 5.5C18.7 5.5 19.9 5.65 21 6V17.5Z" />
      <Path d="M17.5 9.5C18.38 9.5 19.23 9.59 20 9.76V8.24C19.21 8.09 18.36 8 17.5 8C15.8 8 14.26 8.29 13 8.83V10.49C14.13 9.85 15.7 9.5 17.5 9.5Z" />
      <Path d="M13 11.49V13.15C14.13 12.51 15.7 12.16 17.5 12.16C18.38 12.16 19.23 12.25 20 12.42V10.9C19.21 10.75 18.36 10.66 17.5 10.66C15.8 10.66 14.26 10.96 13 11.49Z" />
      <Path d="M17.5 13.33C15.8 13.33 14.26 13.62 13 14.16V15.82C14.13 15.18 15.7 14.83 17.5 14.83C18.38 14.83 19.23 14.92 20 15.09V13.57C19.21 13.41 18.36 13.33 17.5 13.33Z" />
    </Svg>
  )
}

Icon.displayName = 'MenuBook'

/**
 * Material Icon: Menu Book
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:menu_book Material Icon Docs}
 */
export const MenuBook = memo(Icon)
