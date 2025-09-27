import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 4H3v2h14zm-4 7H3v2h10zm4 7H3v2h14zm0-1V7l5 5z" />
    </svg>
  )
})
Icon.displayName = 'MenuUnfold3Fill'
/**
 * Remix Icon: Menu Unfold 3 Fill
 * @see {@link https://remixicon.com/icon/menu-unfold-3-fill Remix Icon Docs}
 */
export const MenuUnfold3Fill = Icon
