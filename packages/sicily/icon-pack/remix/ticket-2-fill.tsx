import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21.005 3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5V4a1 1 0 0 1 1-1zm-5 6h-8v6h8z" />
    </svg>
  )
})
Icon.displayName = 'Ticket2Fill'
/**
 * Remix Icon: Ticket 2 Fill
 * @see {@link https://remixicon.com/icon/ticket-2-fill Remix Icon Docs}
 */
export const Ticket2Fill = Icon
