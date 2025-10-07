import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2zm-9 2v2h2V9zm0 3v2h2v-2zm0 3v2h2v-2zM7 2h10v2H7z" />
    </svg>
  )
})
Icon.displayName = 'DeleteBin3Fill'
/**
 * Remix Icon: Delete Bin 3 Fill
 * @see {@link https://remixicon.com/icon/delete-bin-3-fill Remix Icon Docs}
 */
export const DeleteBin3Fill = Icon
