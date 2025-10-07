import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h9zm2 18V3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM11 8.5v7L7 12z" />
    </svg>
  )
})
Icon.displayName = 'SidebarFoldFill'
/**
 * Remix Icon: Sidebar Fold Fill
 * @see {@link https://remixicon.com/icon/sidebar-fold-fill Remix Icon Docs}
 */
export const SidebarFoldFill = Icon
