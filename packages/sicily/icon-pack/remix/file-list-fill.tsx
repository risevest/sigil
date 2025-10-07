import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M8 7v2h8V7zm0 4v2h8v-2zm0 4v2h8v-2z" />
    </svg>
  )
})
Icon.displayName = 'FileListFill'
/**
 * Remix Icon: File List Fill
 * @see {@link https://remixicon.com/icon/file-list-fill Remix Icon Docs}
 */
export const FileListFill = Icon
