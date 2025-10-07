import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 2.992v18.016a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.014c.548 0 .993.444.993.992M7 4v9l3.5-2 3.5 2V4z" />
    </svg>
  )
})
Icon.displayName = 'FileMarkedFill'
/**
 * Remix Icon: File Marked Fill
 * @see {@link https://remixicon.com/icon/file-marked-fill Remix Icon Docs}
 */
export const FileMarkedFill = Icon
