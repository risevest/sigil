import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 7v10h10V7zM6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" />
    </svg>
  )
})
Icon.displayName = 'StopLine'
/**
 * Remix Icon: Stop Line
 * @see {@link https://remixicon.com/icon/stop-line Remix Icon Docs}
 */
export const StopLine = Icon
