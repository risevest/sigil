import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zM4 9v10h16V9zm2 2h2v2H6zm0 4h2v2H6zm4-4h8v2h-8zm0 4h5v2h-5z" />
    </svg>
  )
})
Icon.displayName = 'CalendarTodoFill'
/**
 * Remix Icon: Calendar Todo Fill
 * @see {@link https://remixicon.com/icon/calendar-todo-fill Remix Icon Docs}
 */
export const CalendarTodoFill = Icon
