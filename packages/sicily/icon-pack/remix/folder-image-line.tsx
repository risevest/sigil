import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 5v14h16V7h-8.414l-2-2zm8.414 0H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM10 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 6.5-4-6-7 6z" />
    </svg>
  )
})
Icon.displayName = 'FolderImageLine'
/**
 * Remix Icon: Folder Image Line
 * @see {@link https://remixicon.com/icon/folder-image-line Remix Icon Docs}
 */
export const FolderImageLine = Icon
