import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm10-6 5-4-5-4v3H9v2h6z" />
    </svg>
  )
})
Icon.displayName = 'LogoutBoxRFill'
/**
 * Remix Icon: Logout Box R Fill
 * @see {@link https://remixicon.com/icon/logout-box-r-fill Remix Icon Docs}
 */
export const LogoutBoxRFill = Icon
