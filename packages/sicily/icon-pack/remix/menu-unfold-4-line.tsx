import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M17 4H3v2h14zm-4 7H3v2h10zm4 7H3v2h14zm5.01-9.186L20.596 7.4 16 11.996l4.596 4.596 1.414-1.414-3.182-3.182z" />
    </svg>
  )
})
Icon.displayName = 'MenuUnfold4Line'
/**
 * Remix Icon: Menu Unfold 4 Line
 * @see {@link https://remixicon.com/icon/menu-unfold-4-line Remix Icon Docs}
 */
export const MenuUnfold4Line = Icon
