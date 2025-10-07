import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4H5v16zM8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z" />
    </svg>
  )
})
Icon.displayName = 'FileList2Line'
/**
 * Remix Icon: File List 2 Line
 * @see {@link https://remixicon.com/icon/file-list-2-line Remix Icon Docs}
 */
export const FileList2Line = Icon
