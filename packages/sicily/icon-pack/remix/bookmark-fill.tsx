import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1" />
    </svg>
  )
})
Icon.displayName = 'BookmarkFill'
/**
 * Remix Icon: Bookmark Fill
 * @see {@link https://remixicon.com/icon/bookmark-fill Remix Icon Docs}
 */
export const BookmarkFill = Icon
