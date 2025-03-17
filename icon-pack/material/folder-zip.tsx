import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM16 16H18V14H16V12H18V10H16V8H20V18H16V16ZM16 16H14V18H4V6H9.17L11.17 8H14V10H16V12H14V14H16V16Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderZip'

/**
 * Material Icon: Folder Zip
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:folder_zip Material Icon Docs}
 */
export const FolderZip = memo(Icon)
