import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3.497 8.065 4.784 19h14.443l1.286-10.935-4.01 2.673-4.498-6.297-4.498 6.297zM2.806 5.2 7.005 8l4.186-5.861a1 1 0 0 1 1.628 0l4.186 5.86 4.2-2.799a1 1 0 0 1 1.547.949L21.11 20.116a1 1 0 0 1-.993.884H3.894a1 1 0 0 1-.993-.884L1.258 6.15A1 1 0 0 1 2.806 5.2m9.2 9.8a2 2 0 1 1-.001-4 2 2 0 0 1 0 4" />
    </svg>
  )
})
Icon.displayName = 'VipCrown2Line'
/**
 * Remix Icon: Vip Crown 2 Line
 * @see {@link https://remixicon.com/icon/vip-crown-2-line Remix Icon Docs}
 */
export const VipCrown2Line = Icon
