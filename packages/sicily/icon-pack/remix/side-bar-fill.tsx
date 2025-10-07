import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m6 2v14h11V5z" />
    </svg>
  )
})
Icon.displayName = 'SideBarFill'
/**
 * Remix Icon: Side Bar Fill
 * @see {@link https://remixicon.com/icon/side-bar-fill Remix Icon Docs}
 */
export const SideBarFill = Icon
