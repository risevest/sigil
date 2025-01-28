import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 11.2547C21.396 10.8334 20.7224 10.5049 20 10.2899V7H11.5858L9.58579 5H4V19H11.2899C11.5049 19.7224 11.8334 20.396 12.2547 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V11.2547ZM18 22C15.2386 22 13 19.7614 13 17C13 14.2386 15.2386 12 18 12C20.7614 12 23 14.2386 23 17C23 19.7614 20.7614 22 18 22ZM16.7066 19.7076C17.0982 19.895 17.5369 20 18 20C19.6569 20 21 18.6569 21 17C21 16.5369 20.895 16.0982 20.7076 15.7066L16.7066 19.7076ZM15.2924 18.2934L19.2934 14.2924C18.9018 14.105 18.4631 14 18 14C16.3431 14 15 15.3431 15 17C15 17.4631 15.105 17.9018 15.2924 18.2934Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderForbidLine'

/**
 * Remix Icon: Folder Forbid Line
 * @see {@link https://remixicon.com/icon/folder-forbid-line Remix Icon Docs}
 */
export const FolderForbidLine = memo(Icon)
