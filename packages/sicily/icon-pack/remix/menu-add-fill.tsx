import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m18 15-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15zm-7 3v2H3v-2zm10-7v2H3v-2zm0-7v2H3V4z" />
    </svg>
  )
})
Icon.displayName = 'MenuAddFill'
/**
 * Remix Icon: Menu Add Fill
 * @see {@link https://remixicon.com/icon/menu-add-fill Remix Icon Docs}
 */
export const MenuAddFill = Icon
