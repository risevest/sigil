import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6zm2-2v2h6V4z" />
    </svg>
  )
})
Icon.displayName = 'DeleteBin7Fill'
/**
 * Remix Icon: Delete Bin 7 Fill
 * @see {@link https://remixicon.com/icon/delete-bin-7-fill Remix Icon Docs}
 */
export const DeleteBin7Fill = Icon
