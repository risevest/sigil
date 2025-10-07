import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 20V7l-2-4H4L2 7.004V20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1M4 9h16v10H4zm1.236-4h13.528l1 2H4.237zM15 11H9v2h6z" />
    </svg>
  )
})
Icon.displayName = 'Archive2Line'
/**
 * Remix Icon: Archive 2 Line
 * @see {@link https://remixicon.com/icon/archive-2-line Remix Icon Docs}
 */
export const Archive2Line = Icon
