import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m18.033 16.618 4.28 4.282-1.413 1.414-4.282-4.281A8.96 8.96 0 0 1 11 20a9 9 0 0 1-8.065-5H9l-1.304 2.173A7 7 0 0 0 11 18a6.98 6.98 0 0 0 4.875-1.975l.15-.15A6.98 6.98 0 0 0 18 11c0-.695-.101-1.366-.29-2h2.067c.146.643.223 1.313.223 2a8.96 8.96 0 0 1-1.967 5.618M19.065 7H13l1.304-2.173A7 7 0 0 0 11 4c-3.867 0-7 3.133-7 7 0 .695.101 1.366.29 2H2.223A9 9 0 0 1 2 11c0-4.972 4.028-9 9-9a9 9 0 0 1 8.065 5" />
    </svg>
  )
})
Icon.displayName = 'FindReplaceLine'
/**
 * Remix Icon: Find Replace Line
 * @see {@link https://remixicon.com/icon/find-replace-line Remix Icon Docs}
 */
export const FindReplaceLine = Icon
