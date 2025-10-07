import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 0 1 3 21l.003-14c0-.552.45-1 1.006-1zm2 0h8v10h2V4H9zm-2 5v2h6v-2zm0 4v2h6v-2z" />
    </svg>
  )
})
Icon.displayName = 'FileCopy2Fill'
/**
 * Remix Icon: File Copy 2 Fill
 * @see {@link https://remixicon.com/icon/file-copy-2-fill Remix Icon Docs}
 */
export const FileCopy2Fill = Icon
