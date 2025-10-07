import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM4 5v14h16V7h-8.414l-2-2zm8 4v4h4a4 4 0 1 1-4-4" />
    </svg>
  )
})
Icon.displayName = 'FolderChart2Line'
/**
 * Remix Icon: Folder Chart 2 Line
 * @see {@link https://remixicon.com/icon/folder-chart-2-line Remix Icon Docs}
 */
export const FolderChart2Line = Icon
