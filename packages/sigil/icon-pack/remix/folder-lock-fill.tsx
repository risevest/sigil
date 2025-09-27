import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM15 13v-1a3 3 0 1 0-6 0v1H8v4h8v-4zm-2 0h-2v-1a1 1 0 1 1 2 0z" />
    </Svg>
  )
})
Icon.displayName = 'FolderLockFill'
/**
 * Remix Icon: Folder Lock Fill
 * @see {@link https://remixicon.com/icon/folder-lock-fill Remix Icon Docs}
 */
export const FolderLockFill = Icon
