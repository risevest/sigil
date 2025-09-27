import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 3h16l2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004zm9 11v-4h-2v4H8l4 4 4-4zm6.764-7-1-2H5.237l-1 2z" />
    </svg>
  )
})
Icon.displayName = 'InboxArchiveFill'
/**
 * Remix Icon: Inbox Archive Fill
 * @see {@link https://remixicon.com/icon/inbox-archive-fill Remix Icon Docs}
 */
export const InboxArchiveFill = Icon
