import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM12.5 15C13.88 15 15 13.88 15 12.5V7H18V5H14V10.51C13.58 10.19 13.07 10 12.5 10C11.12 10 10 11.12 10 12.5C10 13.88 11.12 15 12.5 15ZM4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6Z" />
    </Svg>
  )
}

Icon.displayName = 'LibraryMusic'

/**
 * Material Icon: Library Music
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:library_music Material Icon Docs}
 */
export const LibraryMusic = memo(Icon)
