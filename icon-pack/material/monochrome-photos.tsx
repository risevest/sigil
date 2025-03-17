import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 5H16.8L15 3H9L7.2 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5ZM20 19H12V18C9.2 18 7 15.8 7 13C7 10.2 9.2 8 12 8V7H20V19ZM17 13C17 10.2 14.8 8 12 8V9.8C13.8 9.8 15.2 11.2 15.2 13C15.2 14.8 13.8 16.2 12 16.2V18C14.8 18 17 15.8 17 13ZM8.8 13C8.8 14.8 10.2 16.2 12 16.2V9.8C10.2 9.8 8.8 11.2 8.8 13Z" />
    </Svg>
  )
}

Icon.displayName = 'MonochromePhotos'

/**
 * Material Icon: Monochrome Photos
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:monochrome_photos Material Icon Docs}
 */
export const MonochromePhotos = memo(Icon)
