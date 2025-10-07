import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM11 13.05a2.5 2.5 0 1 0 2 2.45V11h3V9h-5z" />
    </svg>
  )
})
Icon.displayName = 'FolderMusicFill'
/**
 * Remix Icon: Folder Music Fill
 * @see {@link https://remixicon.com/icon/folder-music-fill Remix Icon Docs}
 */
export const FolderMusicFill = Icon
