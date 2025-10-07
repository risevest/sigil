import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 13h-2V7h-8.414l-2-2H4v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zm-4 4v-3.5l5 4.5-5 4.5V19h-3v-2z" />
    </Svg>
  )
})
Icon.displayName = 'FolderSharedLine'
/**
 * Remix Icon: Folder Shared Line
 * @see {@link https://remixicon.com/icon/folder-shared-line Remix Icon Docs}
 */
export const FolderSharedLine = Icon
