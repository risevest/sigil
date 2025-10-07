import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 7v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7H2V5h20v2zM6 7v13h12V7zm5 2h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zM7 2h10v2H7z" />
    </svg>
  )
})
Icon.displayName = 'DeleteBin3Line'
/**
 * Remix Icon: Delete Bin 3 Line
 * @see {@link https://remixicon.com/icon/delete-bin-3-line Remix Icon Docs}
 */
export const DeleteBin3Line = Icon
