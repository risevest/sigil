import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m10.414 3 2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM12 9a2 2 0 0 0-1 3.732V17h2l.001-4.268A2 2 0 0 0 12 9" />
    </svg>
  )
})
Icon.displayName = 'FolderKeyholeFill'
/**
 * Remix Icon: Folder Keyhole Fill
 * @see {@link https://remixicon.com/icon/folder-keyhole-fill Remix Icon Docs}
 */
export const FolderKeyholeFill = Icon
