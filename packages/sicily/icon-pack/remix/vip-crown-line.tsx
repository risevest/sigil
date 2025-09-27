import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2.005 19h20v2h-20zm0-14 5 3.5 5-6.5 5 6.5 5-3.5v12h-20zm2 3.841V15h16V8.841l-3.42 2.394-4.58-5.955-4.58 5.955z" />
    </svg>
  )
})
Icon.displayName = 'VipCrownLine'
/**
 * Remix Icon: Vip Crown Line
 * @see {@link https://remixicon.com/icon/vip-crown-line Remix Icon Docs}
 */
export const VipCrownLine = Icon
