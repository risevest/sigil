import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
    </svg>
  )
})
Icon.displayName = 'StopLargeFill'
/**
 * Remix Icon: Stop Large Fill
 * @see {@link https://remixicon.com/icon/stop-large-fill Remix Icon Docs}
 */
export const StopLargeFill = Icon
