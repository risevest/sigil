import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2.005 9.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-5.5a2.5 2.5 0 0 0 0-5m12-4.5h-10v2.968a4.5 4.5 0 0 1 0 8.064V19h10zm2 0v14h4v-2.968a4.5 4.5 0 0 1 0-8.064V5z" />
    </svg>
  )
})
Icon.displayName = 'Coupon2Line'
/**
 * Remix Icon: Coupon 2 Line
 * @see {@link https://remixicon.com/icon/coupon-2-line Remix Icon Docs}
 */
export const Coupon2Line = Icon
