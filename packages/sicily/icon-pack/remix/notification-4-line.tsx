import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 10a6 6 0 0 0-12 0v8h12zm2 8.667.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0zM9.5 21h5a2.5 2.5 0 0 1-5 0" />
    </svg>
  )
})
Icon.displayName = 'Notification4Line'
/**
 * Remix Icon: Notification 4 Line
 * @see {@link https://remixicon.com/icon/notification-4-line Remix Icon Docs}
 */
export const Notification4Line = Icon
