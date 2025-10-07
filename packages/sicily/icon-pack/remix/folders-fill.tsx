import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 7V4a1 1 0 0 1 1-1h6.414l2 2H21a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm0 2H4v10h12v-2H6z" />
    </svg>
  )
})
Icon.displayName = 'FoldersFill'
/**
 * Remix Icon: Folders Fill
 * @see {@link https://remixicon.com/icon/folders-fill Remix Icon Docs}
 */
export const FoldersFill = Icon
