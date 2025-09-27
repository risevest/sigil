import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 14.252V22H4a8 8 0 0 1 10-7.748M12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6m11 5v2h-8v-2z" />
    </svg>
  )
})
Icon.displayName = 'UserMinusFill'
/**
 * Remix Icon: User Minus Fill
 * @see {@link https://remixicon.com/icon/user-minus-fill Remix Icon Docs}
 */
export const UserMinusFill = Icon
