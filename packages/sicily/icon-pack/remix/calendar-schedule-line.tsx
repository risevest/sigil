import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 3V1h2v2h6V1h2v2h4a1 1 0 0 1 1 1v5h-2V5h-3v2h-2V5H9v2H7V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm10 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0 6 6 0 0 1-12 0m5-3v3.414l2.293 2.293 1.414-1.414L18 15.586V13z" />
    </svg>
  )
})
Icon.displayName = 'CalendarScheduleLine'
/**
 * Remix Icon: Calendar Schedule Line
 * @see {@link https://remixicon.com/icon/calendar-schedule-line Remix Icon Docs}
 */
export const CalendarScheduleLine = Icon
