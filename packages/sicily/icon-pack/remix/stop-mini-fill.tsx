import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 7v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1" />
    </svg>
  )
})
Icon.displayName = 'StopMiniFill'
/**
 * Remix Icon: Stop Mini Fill
 * @see {@link https://remixicon.com/icon/stop-mini-fill Remix Icon Docs}
 */
export const StopMiniFill = Icon
