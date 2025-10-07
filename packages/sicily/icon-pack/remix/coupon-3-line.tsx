import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2.005 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1zM8.09 19a1.5 1.5 0 0 1 2.83 0h9.085v-2.968a4.5 4.5 0 0 1 0-8.064V5H10.92a1.5 1.5 0 0 1-2.83 0H4.005v14zm1.415-8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </svg>
  )
})
Icon.displayName = 'Coupon3Line'
/**
 * Remix Icon: Coupon 3 Line
 * @see {@link https://remixicon.com/icon/coupon-3-line Remix Icon Docs}
 */
export const Coupon3Line = Icon
