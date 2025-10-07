import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 12H8v2h3v3h2v-3h3v-2h-3V9h-2z" />
    </Svg>
  )
})
Icon.displayName = 'FolderAddFill'
/**
 * Remix Icon: Folder Add Fill
 * @see {@link https://remixicon.com/icon/folder-add-fill Remix Icon Docs}
 */
export const FolderAddFill = Icon
