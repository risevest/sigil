import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 11V17.97L11 15.83L6 17.97V5H12V3H6C4.9 3 4 3.9 4 5V21L11 18L18 21V11H16ZM20 7H18V9H16V7H14V5H16V3H18V5H20V7Z" />
    </Svg>
  )
}

Icon.displayName = 'BookmarkAdd'

/**
 * Material Icon: Bookmark Add
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bookmark_add Material Icon Docs}
 */
export const BookmarkAdd = memo(Icon)
