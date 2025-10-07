import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m4 3.5 5 5-5 5zM21 20v-2H3v2zm0-7v-2h-9v2zm0-7V4h-9v2z" />
    </svg>
  )
})
Icon.displayName = 'MenuFold2Fill'
/**
 * Remix Icon: Menu Fold 2 Fill
 * @see {@link https://remixicon.com/icon/menu-fold-2-fill Remix Icon Docs}
 */
export const MenuFold2Fill = Icon
