import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4zM6 6v14h12V6zm3 3h2v8H9zm4 0h2v8h-2z" />
    </svg>
  )
})
Icon.displayName = 'DeleteBin6Line'
/**
 * Remix Icon: Delete Bin 6 Line
 * @see {@link https://remixicon.com/icon/delete-bin-6-line Remix Icon Docs}
 */
export const DeleteBin6Line = Icon
