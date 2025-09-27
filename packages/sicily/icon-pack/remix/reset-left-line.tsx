import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2v2a8 8 0 1 0 4.5 1.385V8h-2V2h6v2H18a9.99 9.99 0 0 1 4 8" />
    </svg>
  )
})
Icon.displayName = 'ResetLeftLine'
/**
 * Remix Icon: Reset Left Line
 * @see {@link https://remixicon.com/icon/reset-left-line Remix Icon Docs}
 */
export const ResetLeftLine = Icon
