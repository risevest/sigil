import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 19V9H4v10zm0-12V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm2-2v14h7V5zM5 16h5v2H5zm9 0h5v2h-5zm0-3h5v2h-5zm0-3h5v2h-5zm-9 3h5v2H5z" />
    </svg>
  )
})
Icon.displayName = 'DatabaseLine'
/**
 * Remix Icon: Database Line
 * @see {@link https://remixicon.com/icon/database-line Remix Icon Docs}
 */
export const DatabaseLine = Icon
