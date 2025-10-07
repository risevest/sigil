import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m4 9V8l-5 4 5 4v-3h6v-2z" />
    </svg>
  )
})
Icon.displayName = 'LogoutBoxFill'
/**
 * Remix Icon: Logout Box Fill
 * @see {@link https://remixicon.com/icon/logout-box-fill Remix Icon Docs}
 */
export const LogoutBoxFill = Icon
