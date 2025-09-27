import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm6 7.792a2.5 2.5 0 1 1 2 0V16h-2z" />
    </svg>
  )
})
Icon.displayName = 'DoorLockBoxLine'
/**
 * Remix Icon: Door Lock Box Line
 * @see {@link https://remixicon.com/icon/door-lock-box-line Remix Icon Docs}
 */
export const DoorLockBoxLine = Icon
