import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM14 10H7V12H14V10ZM14 7H7V9H14V7ZM7 15H10V13H7V15ZM19 13V15H17V17H15V15H13V13H15V11H17V13H19Z" />
    </Svg>
  )
}

Icon.displayName = 'PlaylistAddCircle'

/**
 * Material Icon: Playlist Add Circle
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:playlist_add_circle Material Icon Docs}
 */
export const PlaylistAddCircle = memo(Icon)
