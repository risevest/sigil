import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 13.126A6 6 0 0 0 13.303 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zM18 17v-3.5l5 4.5-5 4.5V19h-3v-2z" />
    </svg>
  )
})
Icon.displayName = 'FolderSharedFill'
/**
 * Remix Icon: Folder Shared Fill
 * @see {@link https://remixicon.com/icon/folder-shared-fill Remix Icon Docs}
 */
export const FolderSharedFill = Icon
