import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 21a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H20a1 1 0 0 1 1 1v3H4v9.996L6 11h16.5l-2.31 9.243a1 1 0 0 1-.97.757z" />
    </svg>
  )
})
Icon.displayName = 'FolderOpenFill'
/**
 * Remix Icon: Folder Open Fill
 * @see {@link https://remixicon.com/icon/folder-open-fill Remix Icon Docs}
 */
export const FolderOpenFill = Icon
