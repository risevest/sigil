import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM17 4V9L16 8.25L15 9V4H17ZM20 16H8V4H13V13L16 10.75L19 13V4H20V16Z" />
    </Svg>
  )
}

Icon.displayName = 'CollectionsBookmark'

/**
 * Material Icon: Collections Bookmark
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:collections_bookmark Material Icon Docs}
 */
export const CollectionsBookmark = memo(Icon)
