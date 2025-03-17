import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 10V9H14.5V10H12V11.5H13V15.5C13 16.33 13.67 17 14.5 17H16.5C17.33 17 18 16.33 18 15.5V11.5H19V10H16.5ZM16.5 15.5H14.5V11.5H16.5V15.5ZM20 6H12L10 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V8C22 6.89 21.11 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderDelete'

/**
 * Material Icon: Folder Delete
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:folder_delete Material Icon Docs}
 */
export const FolderDelete = memo(Icon)
