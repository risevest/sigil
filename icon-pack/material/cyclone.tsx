import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14Z" />
      <Path d="M22 7.47V5.35C20.05 4.77 16.56 4 12 4C9.85 4 7.89 4.86 6.46 6.24C6.59 5.39 6.86 3.84 7.47 2H5.35C4.77 3.95 4 7.44 4 12C4 14.15 4.86 16.11 6.24 17.54C5.39 17.4 3.84 17.14 2 16.53V18.65C3.95 19.23 7.44 20 12 20C14.15 20 16.11 19.14 17.54 17.76C17.4 18.61 17.14 20.16 16.53 22H18.65C19.23 20.05 20 16.56 20 12C20 9.85 19.14 7.89 17.76 6.46C18.61 6.59 20.16 6.86 22 7.47ZM12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C15.31 6 18 8.69 18 12C18 15.31 15.31 18 12 18Z" />
    </Svg>
  )
}

Icon.displayName = 'Cyclone'

/**
 * Material Icon: Cyclone
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cyclone Material Icon Docs}
 */
export const Cyclone = memo(Icon)
