import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19ZM8 15C8 13.34 9.34 12 11 12C11.35 12 11.69 12.07 12 12.18V6H17V8H14V15.03C13.98 16.67 12.65 18 11 18C9.34 18 8 16.66 8 15Z" />
    </Svg>
  )
}

Icon.displayName = 'MusicVideo'

/**
 * Material Icon: Music Video
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:music_video Material Icon Docs}
 */
export const MusicVideo = memo(Icon)
