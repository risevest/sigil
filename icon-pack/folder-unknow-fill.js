import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM11 16V18H13V16H11ZM8.56731 10.8135L10.5288 11.2058C10.6656 10.5182 11.2723 10 12 10C12.8284 10 13.5 10.6716 13.5 11.5C13.5 12.3284 12.8284 13 12 13H11V15H12C13.933 15 15.5 13.433 15.5 11.5C15.5 9.567 13.933 8 12 8C10.302 8 8.88637 9.20919 8.56731 10.8135Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderUnknowFill'

/**
 * Remix Icon: Folder Unknow Fill
 * @see {@link https://remixicon.com/icon/folder-unknow-fill Remix Icon Docs}
 */
export const FolderUnknowFill = memo(Icon)