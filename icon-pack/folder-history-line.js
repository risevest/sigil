import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.4142 3L12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142ZM9.58579 5H4V19H20V7H11.5858L9.58579 5ZM13 9V13H16V15H11V9H13Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderHistoryLine'

/**
 * Remix Icon: Folder History Line
 * @see {@link https://remixicon.com/icon/folder-history-line Remix Icon Docs}
 */
export const FolderHistoryLine = memo(Icon)
