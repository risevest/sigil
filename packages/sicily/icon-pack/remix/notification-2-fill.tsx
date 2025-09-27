import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1zM9.5 21h5a2.5 2.5 0 0 1-5 0" />
    </svg>
  )
})
Icon.displayName = 'Notification2Fill'
/**
 * Remix Icon: Notification 2 Fill
 * @see {@link https://remixicon.com/icon/notification-2-fill Remix Icon Docs}
 */
export const Notification2Fill = Icon
