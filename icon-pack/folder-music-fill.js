import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM11 13.05C10.8384 13.0172 10.6712 13 10.5 13C9.11929 13 8 14.1193 8 15.5C8 16.8807 9.11929 18 10.5 18C11.8807 18 13 16.8807 13 15.5V11H16V9H11V13.05Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderMusicFill'

/**
 * Remix Icon: Folder Music Fill
 * @see {@link https://remixicon.com/icon/folder-music-fill Remix Icon Docs}
 */
export const FolderMusicFill = memo(Icon)
