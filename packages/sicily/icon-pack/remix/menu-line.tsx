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
Icon.displayName = 'MenuLine'
/**
 * Remix Icon: Menu Line
 * @see {@link https://remixicon.com/icon/menu-line Remix Icon Docs}
 */
export const MenuLine = Icon
