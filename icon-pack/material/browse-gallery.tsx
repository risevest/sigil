import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 3C4.03 3 0 7.03 0 12C0 16.97 4.03 21 9 21C13.97 21 18 16.97 18 12C18 7.03 13.97 3 9 3ZM9 19C5.14 19 2 15.86 2 12C2 8.14 5.14 5 9 5C12.86 5 16 8.14 16 12C16 15.86 12.86 19 9 19Z" />
      <Path d="M10 7H8V12.41L11.79 16.21L13.21 14.79L10 11.59V7Z" />
      <Path d="M17.99 3.52V5.68C20.36 6.8 22 9.21 22 12C22 14.79 20.36 17.2 17.99 18.32V20.48C21.48 19.24 24 15.91 24 12C24 8.09 21.48 4.76 17.99 3.52Z" />
    </Svg>
  )
}

Icon.displayName = 'BrowseGallery'

/**
 * Material Icon: Browse Gallery
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:browse_gallery Material Icon Docs}
 */
export const BrowseGallery = memo(Icon)
