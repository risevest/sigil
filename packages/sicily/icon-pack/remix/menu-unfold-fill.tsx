import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 18v2H3v-2zM17 3.5l5 5-5 5zM12 11v2H3v-2zm0-7v2H3V4z" />
    </svg>
  )
})
Icon.displayName = 'MenuUnfoldFill'
/**
 * Remix Icon: Menu Unfold Fill
 * @see {@link https://remixicon.com/icon/menu-unfold-fill Remix Icon Docs}
 */
export const MenuUnfoldFill = Icon
