import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 1v1H7a3 3 0 0 0-3 3v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a3 3 0 0 0-3-3h-4V1zM6 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 22a6 6 0 0 1 12 0h2a8 8 0 1 0-16 0z" />
    </svg>
  )
})
Icon.displayName = 'Robot3Line'
/**
 * Remix Icon: Robot 3 Line
 * @see {@link https://remixicon.com/icon/robot-3-line Remix Icon Docs}
 */
export const Robot3Line = Icon
