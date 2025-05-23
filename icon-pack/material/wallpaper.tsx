import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 4H11V2H4C2.9 2 2 2.9 2 4V11H4V4ZM10 13L6 18H18L15 14L12.97 16.71L10 13ZM17 8.5C17 7.67 16.33 7 15.5 7C14.67 7 14 7.67 14 8.5C14 9.33 14.67 10 15.5 10C16.33 10 17 9.33 17 8.5ZM20 2H13V4H20V11H22V4C22 2.9 21.1 2 20 2ZM20 20H13V22H20C21.1 22 22 21.1 22 20V13H20V20ZM4 13H2V20C2 21.1 2.9 22 4 22H11V20H4V13Z" />
    </Svg>
  )
}

Icon.displayName = 'Wallpaper'

/**
 * Material Icon: Wallpaper
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:wallpaper Material Icon Docs}
 */
export const Wallpaper = memo(Icon)
