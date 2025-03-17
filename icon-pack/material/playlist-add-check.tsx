import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.5 9.5H2.5V11.5H13.5V9.5Z" />
      <Path d="M13.5 5.5H2.5V7.5H13.5V5.5Z" />
      <Path d="M9.5 13.5H2.5V15.5H9.5V13.5Z" />
      <Path d="M20.09 11.43L15.84 15.67L13.72 13.55L12.31 14.96L15.84 18.5L21.5 12.84L20.09 11.43Z" />
    </Svg>
  )
}

Icon.displayName = 'PlaylistAddCheck'

/**
 * Material Icon: Playlist Add Check
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:playlist_add_check Material Icon Docs}
 */
export const PlaylistAddCheck = memo(Icon)
