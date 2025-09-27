import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22.005 7h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm0 2v11a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V9zm-11 5v-2.5l-4.5 4.5h10.5v-2z" />
    </svg>
  )
})
Icon.displayName = 'RefundFill'
/**
 * Remix Icon: Refund Fill
 * @see {@link https://remixicon.com/icon/refund-fill Remix Icon Docs}
 */
export const RefundFill = Icon
