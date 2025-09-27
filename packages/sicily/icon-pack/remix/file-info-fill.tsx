import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-5 5v2h2V7zm0 4v6h2v-6z" />
    </svg>
  )
})
Icon.displayName = 'FileInfoFill'
/**
 * Remix Icon: File Info Fill
 * @see {@link https://remixicon.com/icon/file-info-fill Remix Icon Docs}
 */
export const FileInfoFill = Icon
