import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18Z" />
      <Path d="M8.29 15.71C7.27 14.69 6.75 13.35 6.75 12C6.75 10.65 7.27 9.31 8.28 8.28L7.05 7.05C5.68 8.41 5 10.21 5 12C5 13.79 5.68 15.59 7.06 16.94L8.29 15.71Z" />
      <Path d="M12 15.5C13.93 15.5 15.5 13.93 15.5 12C15.5 10.07 13.93 8.5 12 8.5C10.07 8.5 8.5 10.07 8.5 12C8.5 13.93 10.07 15.5 12 15.5ZM12 10.5C12.83 10.5 13.5 11.17 13.5 12C13.5 12.83 12.83 13.5 12 13.5C11.17 13.5 10.5 12.83 10.5 12C10.5 11.17 11.17 10.5 12 10.5Z" />
      <Path d="M15.72 15.72L16.95 16.95C18.32 15.59 19 13.79 19 12C19 10.21 18.32 8.41 16.94 7.06L15.71 8.29C16.73 9.31 17.25 10.65 17.25 12C17.25 13.35 16.73 14.69 15.72 15.72Z" />
    </Svg>
  )
}

Icon.displayName = 'SurroundSound'

/**
 * Material Icon: Surround Sound
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:surround_sound Material Icon Docs}
 */
export const SurroundSound = memo(Icon)
