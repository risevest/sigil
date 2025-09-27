import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 18v2H6v-2zm3-7v2H3v-2zm-3-7v2H6V4z" />
    </svg>
  )
})
Icon.displayName = 'Menu5Line'
/**
 * Remix Icon: Menu 5 Line
 * @see {@link https://remixicon.com/icon/menu-5-line Remix Icon Docs}
 */
export const Menu5Line = Icon
