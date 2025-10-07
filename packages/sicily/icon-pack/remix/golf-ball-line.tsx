import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m2-15a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </svg>
  )
})
Icon.displayName = 'GolfBallLine'
/**
 * Remix Icon: Golf Ball Line
 * @see {@link https://remixicon.com/icon/golf-ball-line Remix Icon Docs}
 */
export const GolfBallLine = Icon
