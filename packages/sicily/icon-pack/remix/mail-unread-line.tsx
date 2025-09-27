import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16.1 3a5 5 0 0 0 0 2H4.511l7.55 6.662 5.049-4.52c.426.527.958.966 1.563 1.285l-6.601 5.911L4 7.216V19h16V8.9a5 5 0 0 0 2 0V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM21 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    </svg>
  )
})
Icon.displayName = 'MailUnreadLine'
/**
 * Remix Icon: Mail Unread Line
 * @see {@link https://remixicon.com/icon/mail-unread-line Remix Icon Docs}
 */
export const MailUnreadLine = Icon
