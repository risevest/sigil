import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21.005 14v7a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-7a2 2 0 1 0 0-4V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 1 0 0 4m-12-8v2h6V6zm0 10v2h6v-2z" />
    </svg>
  )
})
Icon.displayName = 'Coupon5Fill'
/**
 * Remix Icon: Coupon 5 Fill
 * @see {@link https://remixicon.com/icon/coupon-5-fill Remix Icon Docs}
 */
export const Coupon5Fill = Icon
