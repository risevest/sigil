import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 7V19.97L10 17.82L5 19.97V7H15ZM19 1H8.99C7.89 1 7 1.9 7 3H17C18.1 3 19 3.9 19 5V18L21 19V3C21 1.9 20.1 1 19 1ZM15 5H5C3.9 5 3 5.9 3 7V23L10 20L17 23V7C17 5.9 16.1 5 15 5Z" />
    </Svg>
  )
}

Icon.displayName = 'Bookmarks'

/**
 * Material Icon: Bookmarks
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bookmarks Material Icon Docs}
 */
export const Bookmarks = memo(Icon)
