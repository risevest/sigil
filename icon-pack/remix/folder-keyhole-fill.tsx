import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.4142 3L12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142ZM12 9C10.8954 9 10 9.89543 10 11C10 11.7403 10.4022 12.3866 10.9999 12.7324L11 17H13L13.0011 12.7318C13.5983 12.3858 14 11.7398 14 11C14 9.89543 13.1046 9 12 9Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderKeyholeFill'

/**
 * Remix Icon: Folder Keyhole Fill
 * @see {@link https://remixicon.com/icon/folder-keyhole-fill Remix Icon Docs}
 */
export const FolderKeyholeFill = memo(Icon)
