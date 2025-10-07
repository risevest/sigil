import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 5h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" />
    </svg>
  )
})
Icon.displayName = 'StopFill'
/**
 * Remix Icon: Stop Fill
 * @see {@link https://remixicon.com/icon/stop-fill Remix Icon Docs}
 */
export const StopFill = Icon
