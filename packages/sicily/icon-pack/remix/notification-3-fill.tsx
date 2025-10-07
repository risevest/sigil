import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0zM9 21h6v2H9z" />
    </svg>
  )
})
Icon.displayName = 'Notification3Fill'
/**
 * Remix Icon: Notification 3 Fill
 * @see {@link https://remixicon.com/icon/notification-3-fill Remix Icon Docs}
 */
export const Notification3Fill = Icon
