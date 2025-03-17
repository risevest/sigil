import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.115 11.1854V18.1554L10.115 16.0154L5.11499 18.1554V5.18543H11.115V3.18543H5.11499C4.01499 3.18543 3.11499 4.08543 3.11499 5.18543V21.1854L10.115 18.1854L17.115 21.1854V11.1854H15.115ZM15.945 9.18543L13.115 6.35543L14.525 4.94543L15.935 6.35543L19.475 2.81543L20.885 4.22543L15.945 9.18543Z" />
    </Svg>
  )
}

Icon.displayName = 'BookmarkAdded'

/**
 * Material Icon: Bookmark Added
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:bookmark_added Material Icon Docs}
 */
export const BookmarkAdded = memo(Icon)
