import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m3.536 5.05L10.586 12 12 13.414l4.95-4.95z" />
    </svg>
  )
})
Icon.displayName = 'Timer2Fill'
/**
 * Remix Icon: Timer 2 Fill
 * @see {@link https://remixicon.com/icon/timer-2-fill Remix Icon Docs}
 */
export const Timer2Fill = Icon
