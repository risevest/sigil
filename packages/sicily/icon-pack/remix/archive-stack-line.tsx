import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 5h16V3H4zm16 4H4V7h16zM3 11h7v2h4v-2h7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm13 2v2H8v-2H5v6h14v-6z" />
    </svg>
  )
})
Icon.displayName = 'ArchiveStackLine'
/**
 * Remix Icon: Archive Stack Line
 * @see {@link https://remixicon.com/icon/archive-stack-line Remix Icon Docs}
 */
export const ArchiveStackLine = Icon
