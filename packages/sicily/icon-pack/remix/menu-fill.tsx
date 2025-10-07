import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
    </svg>
  )
})
Icon.displayName = 'MenuFill'
/**
 * Remix Icon: Menu Fill
 * @see {@link https://remixicon.com/icon/menu-fill Remix Icon Docs}
 */
export const MenuFill = Icon
