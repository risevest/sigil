import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 7H4v11h16zm-4.964 2.136 1.414 1.414-4.95 4.95-3.536-3.536L9.38 11.55l2.121 2.122z" />
    </svg>
  )
})
Icon.displayName = 'CalendarCheckFill'
/**
 * Remix Icon: Calendar Check Fill
 * @see {@link https://remixicon.com/icon/calendar-check-fill Remix Icon Docs}
 */
export const CalendarCheckFill = Icon
