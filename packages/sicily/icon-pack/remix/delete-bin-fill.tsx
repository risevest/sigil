import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-8 5v6h2v-6zm4 0v6h2v-6zM9 4v2h6V4z" />
    </svg>
  )
})
Icon.displayName = 'DeleteBinFill'
/**
 * Remix Icon: Delete Bin Fill
 * @see {@link https://remixicon.com/icon/delete-bin-fill Remix Icon Docs}
 */
export const DeleteBinFill = Icon
