import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0zM7 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0z" />
    </svg>
  )
})
Icon.displayName = 'PauseMiniLine'
/**
 * Remix Icon: Pause Mini Line
 * @see {@link https://remixicon.com/icon/pause-mini-line Remix Icon Docs}
 */
export const PauseMiniLine = Icon
