import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 11.674A7 7 0 0 0 12.255 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16l5 5zM18 23a5 5 0 1 1 0-10 5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001zm-1.415-1.415 4.001-4a3 3 0 0 0-4.001 4.001" />
    </svg>
  )
})
Icon.displayName = 'FileForbidFill'
/**
 * Remix Icon: File Forbid Fill
 * @see {@link https://remixicon.com/icon/file-forbid-fill Remix Icon Docs}
 */
export const FileForbidFill = Icon
