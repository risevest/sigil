import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16M9 9h2v6H9zm4 0h2v6h-2z" />
    </svg>
  )
})
Icon.displayName = 'PauseCircleLine'
/**
 * Remix Icon: Pause Circle Line
 * @see {@link https://remixicon.com/icon/pause-circle-line Remix Icon Docs}
 */
export const PauseCircleLine = Icon
