import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m10.414 3 2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM13 9h-2v6h5v-2h-3z" />
    </svg>
  )
})
Icon.displayName = 'FolderHistoryFill'
/**
 * Remix Icon: Folder History Fill
 * @see {@link https://remixicon.com/icon/folder-history-fill Remix Icon Docs}
 */
export const FolderHistoryFill = Icon
