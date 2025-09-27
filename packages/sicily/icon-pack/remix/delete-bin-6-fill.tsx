import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 4h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5V2h10zM9 9v8h2V9zm4 0v8h2V9z" />
    </svg>
  )
})
Icon.displayName = 'DeleteBin6Fill'
/**
 * Remix Icon: Delete Bin 6 Fill
 * @see {@link https://remixicon.com/icon/delete-bin-6-fill Remix Icon Docs}
 */
export const DeleteBin6Fill = Icon
