import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.5 8.5H2.5V10.5H13.5V8.5Z" />
      <Path d="M13.5 4.5H2.5V6.5H13.5V4.5Z" />
      <Path d="M9.5 12.5H2.5V14.5H9.5V12.5Z" />
      <Path d="M15.5 11.5V19.5L21.5 15.5L15.5 11.5Z" />
    </Svg>
  )
}

Icon.displayName = 'PlaylistPlay'

/**
 * Material Icon: Playlist Play
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:playlist_play Material Icon Docs}
 */
export const PlaylistPlay = memo(Icon)
