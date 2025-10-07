import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20.596 3.903 15.999 8.5l4.597 4.596 1.414-1.415L18.828 8.5l3.182-3.182zM21 20v-2H3v2zm-9-7v-2H3v2zm0-7V4H3v2z" />
    </svg>
  )
})
Icon.displayName = 'MenuUnfold2Line'
/**
 * Remix Icon: Menu Unfold 2 Line
 * @see {@link https://remixicon.com/icon/menu-unfold-2-line Remix Icon Docs}
 */
export const MenuUnfold2Line = Icon
