import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-9 10H5v6h6zm2 6h6V5h-6zM11 5H5v6h6z" />
    </svg>
  )
})
Icon.displayName = 'Layout4Line'
/**
 * Remix Icon: Layout 4 Line
 * @see {@link https://remixicon.com/icon/layout-4-line Remix Icon Docs}
 */
export const Layout4Line = Icon
