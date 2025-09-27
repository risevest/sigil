import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9 3V1H7v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4V1h-2v2zm-5 7h16v9H4zm0-5h3v1h2V5h6v1h2V5h3v3H4zm5.879 5.964L12 13.086l2.121-2.122 1.415 1.415-2.122 2.121 2.121 2.121-1.414 1.414L12 15.915l-2.121 2.12-1.415-1.414 2.122-2.12-2.122-2.122z" />
    </svg>
  )
})
Icon.displayName = 'CalendarCloseLine'
/**
 * Remix Icon: Calendar Close Line
 * @see {@link https://remixicon.com/icon/calendar-close-line Remix Icon Docs}
 */
export const CalendarCloseLine = Icon
