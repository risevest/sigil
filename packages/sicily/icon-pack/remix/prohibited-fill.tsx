import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19.743 18.329A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-6.329 2.257zM4.257 5.67A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 6.329-2.257z" />
    </svg>
  )
})
Icon.displayName = 'ProhibitedFill'
/**
 * Remix Icon: Prohibited Fill
 * @see {@link https://remixicon.com/icon/prohibited-fill Remix Icon Docs}
 */
export const ProhibitedFill = Icon
