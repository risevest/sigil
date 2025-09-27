import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m17.618 5.968 1.453-1.453 1.414 1.414-1.453 1.453A9 9 0 1 1 12 4c2.125 0 4.078.736 5.618 1.968M12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14M11 8h2v6h-2zM8 1h8v2H8z" />
    </svg>
  )
})
Icon.displayName = 'TimerLine'
/**
 * Remix Icon: Timer Line
 * @see {@link https://remixicon.com/icon/timer-line Remix Icon Docs}
 */
export const TimerLine = Icon
