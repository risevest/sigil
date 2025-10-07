import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 11h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm15-8h4a1 1 0 0 1 1 1v5H2V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2z" />
    </svg>
  )
})
Icon.displayName = 'CalendarFill'
/**
 * Remix Icon: Calendar Fill
 * @see {@link https://remixicon.com/icon/calendar-fill Remix Icon Docs}
 */
export const CalendarFill = Icon
