import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 7h18v10h-2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v2H3zM2 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm9 4H5v3h6zm2 0h6v3h-6z" />
    </svg>
  )
})
Icon.displayName = 'RamLine'
/**
 * Remix Icon: Ram Line
 * @see {@link https://remixicon.com/icon/ram-line Remix Icon Docs}
 */
export const RamLine = Icon
