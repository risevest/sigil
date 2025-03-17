import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.5 9H2.5V11H13.5V9ZM13.5 5H2.5V7H13.5V5ZM17.5 13V9H15.5V13H11.5V15H15.5V19H17.5V15H21.5V13H17.5ZM2.5 15H9.5V13H2.5V15Z" />
    </Svg>
  )
}

Icon.displayName = 'PlaylistAdd'

/**
 * Material Icon: Playlist Add
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:playlist_add Material Icon Docs}
 */
export const PlaylistAdd = memo(Icon)
