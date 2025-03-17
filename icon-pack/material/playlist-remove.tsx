import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 8H3V10H14V8ZM14 4H3V6H14V4ZM3 14H10V12H3V14ZM14.41 20L17 17.41L19.59 20L21 18.59L18.41 16L21 13.41L19.59 12L17 14.59L14.41 12L13 13.41L15.59 16L13 18.59L14.41 20Z" />
    </Svg>
  )
}

Icon.displayName = 'PlaylistRemove'

/**
 * Material Icon: Playlist Remove
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:playlist_remove Material Icon Docs}
 */
export const PlaylistRemove = memo(Icon)
