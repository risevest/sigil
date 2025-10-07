import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z" />
    </svg>
  )
})
Icon.displayName = 'Menu2Line'
/**
 * Remix Icon: Menu 2 Line
 * @see {@link https://remixicon.com/icon/menu-2-line Remix Icon Docs}
 */
export const Menu2Line = Icon
