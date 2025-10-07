import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 5h8v14H5zm14 14h-4V5h4zM4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm7 9L7 8.5v7z" />
    </svg>
  )
})
Icon.displayName = 'SidebarUnfoldLine'
/**
 * Remix Icon: Sidebar Unfold Line
 * @see {@link https://remixicon.com/icon/sidebar-unfold-line Remix Icon Docs}
 */
export const SidebarUnfoldLine = Icon
