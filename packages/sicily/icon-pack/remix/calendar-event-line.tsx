import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zm-9 2v4H6v-4zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z" />
    </svg>
  )
})
Icon.displayName = 'CalendarEventLine'
/**
 * Remix Icon: Calendar Event Line
 * @see {@link https://remixicon.com/icon/calendar-event-line Remix Icon Docs}
 */
export const CalendarEventLine = Icon
