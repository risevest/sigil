import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 12h12V8h-4V4H6zm-2 0V2.995c0-.55.445-.995.996-.995H15l5 5v5h2v2H2v-2zm-1 4h2v6H3zm16 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6h-2zm-4 0h2v6H7z" />
    </svg>
  )
})
Icon.displayName = 'FileShredLine'
/**
 * Remix Icon: File Shred Line
 * @see {@link https://remixicon.com/icon/file-shred-line Remix Icon Docs}
 */
export const FileShredLine = Icon
