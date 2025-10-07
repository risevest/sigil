import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18.803 8.493A5.022 5.022 0 0 0 22 8.9V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h13.1q-.1.486-.1 1a4.98 4.98 0 0 0 1.193 3.241l-5.132 4.442-6.414-5.445-1.294 1.524 7.72 6.555zM21 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </svg>
  )
})
Icon.displayName = 'MailUnreadFill'
/**
 * Remix Icon: Mail Unread Fill
 * @see {@link https://remixicon.com/icon/mail-unread-fill Remix Icon Docs}
 */
export const MailUnreadFill = Icon
