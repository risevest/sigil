import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 12H8v2h3v3h2v-3h3v-2h-3V9h-2z" />
    </svg>
  )
})
Icon.displayName = 'FolderAddFill'
/**
 * Remix Icon: Folder Add Fill
 * @see {@link https://remixicon.com/icon/folder-add-fill Remix Icon Docs}
 */
export const FolderAddFill = Icon
