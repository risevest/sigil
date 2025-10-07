import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 5h-8.586l-2-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-6 7.667a.4.4 0 0 1 0 .666l-4.878 3.252a.4.4 0 0 1-.622-.333V9.747a.4.4 0 0 1 .622-.333z" />
    </svg>
  )
})
Icon.displayName = 'FolderVideoFill'
/**
 * Remix Icon: Folder Video Fill
 * @see {@link https://remixicon.com/icon/folder-video-fill Remix Icon Docs}
 */
export const FolderVideoFill = Icon
