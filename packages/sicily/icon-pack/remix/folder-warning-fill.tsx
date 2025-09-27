import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 9v5h2V9zm0 6v2h2v-2z" />
    </svg>
  )
})
Icon.displayName = 'FolderWarningFill'
/**
 * Remix Icon: Folder Warning Fill
 * @see {@link https://remixicon.com/icon/folder-warning-fill Remix Icon Docs}
 */
export const FolderWarningFill = Icon
