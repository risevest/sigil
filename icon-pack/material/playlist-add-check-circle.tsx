import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14 10H7V12H14V10ZM14 7H7V9H14V7ZM7 15H10V13H7V15ZM19 13.41L17.59 12L14.05 15.54L12.64 14.13L11.23 15.54L14.06 18.37L19 13.41Z" />
    </Svg>
  )
}

Icon.displayName = 'PlaylistAddCheckCircle'

/**
 * Material Icon: Playlist Add Check Circle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:playlist_add_check_circle Material Icon Docs}
 */
export const PlaylistAddCheckCircle = memo(Icon)
