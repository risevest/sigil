import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 4h18v2H3zm2 15h14v2H5zm-2-5h18v2H3zm2-5h14v2H5z" />
    </svg>
  )
})
Icon.displayName = 'AlignCenter'
/**
 * Remix Icon: Align Center
 * @see {@link https://remixicon.com/icon/align-center Remix Icon Docs}
 */
export const AlignCenter = Icon
