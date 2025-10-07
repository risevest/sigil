import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18.586 20H4a.5.5 0 0 1-.4-.8l.4-.533V10c0-1.33.325-2.584.899-3.687L1.394 2.808l1.414-1.415 19.799 19.8-1.415 1.414zM20 15.786 7.56 3.345A8 8 0 0 1 20 10zM9.5 21h5a2.5 2.5 0 0 1-5 0" />
    </svg>
  )
})
Icon.displayName = 'NotificationOffFill'
/**
 * Remix Icon: Notification Off Fill
 * @see {@link https://remixicon.com/icon/notification-off-fill Remix Icon Docs}
 */
export const NotificationOffFill = Icon
