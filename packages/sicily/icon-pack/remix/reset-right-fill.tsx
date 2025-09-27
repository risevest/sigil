import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2v2a8 8 0 1 1-5.135 1.865L9 8V2H3l2.446 2.447A9.98 9.98 0 0 0 2 12" />
    </svg>
  )
})
Icon.displayName = 'ResetRightFill'
/**
 * Remix Icon: Reset Right Fill
 * @see {@link https://remixicon.com/icon/reset-right-fill Remix Icon Docs}
 */
export const ResetRightFill = Icon
