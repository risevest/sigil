import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 13H14V11H22V13ZM22 7H14V9H22V7ZM14 17H22V15H14V17ZM12 9V15C12 16.1 11.1 17 10 17H4C2.9 17 2 16.1 2 15V9C2 7.9 2.9 7 4 7H10C11.1 7 12 7.9 12 9ZM10.5 15L8.25 12L6.5 14.26L5.25 12.75L3.5 15H10.5Z" />
    </Svg>
  )
}

Icon.displayName = 'ArtTrack'

/**
 * Material Icon: Art Track
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:art_track Material Icon Docs}
 */
export const ArtTrack = memo(Icon)
