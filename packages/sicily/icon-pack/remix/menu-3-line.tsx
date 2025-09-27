import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 4h18v2H3zm6 7h12v2H9zm-6 7h18v2H3z" />
    </svg>
  )
})
Icon.displayName = 'Menu3Line'
/**
 * Remix Icon: Menu 3 Line
 * @see {@link https://remixicon.com/icon/menu-3-line Remix Icon Docs}
 */
export const Menu3Line = Icon
