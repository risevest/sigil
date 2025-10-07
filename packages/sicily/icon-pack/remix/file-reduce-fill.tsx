import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-8 9v2h8v-2z" />
    </svg>
  )
})
Icon.displayName = 'FileReduceFill'
/**
 * Remix Icon: File Reduce Fill
 * @see {@link https://remixicon.com/icon/file-reduce-fill Remix Icon Docs}
 */
export const FileReduceFill = Icon
