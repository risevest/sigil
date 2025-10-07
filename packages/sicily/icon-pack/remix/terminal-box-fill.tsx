import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9 12v2h6v-2zm-3.586-3-2.828 2.828L7 16.243 11.243 12 7 7.757 5.586 9.172z" />
    </svg>
  )
})
Icon.displayName = 'TerminalBoxFill'
/**
 * Remix Icon: Terminal Box Fill
 * @see {@link https://remixicon.com/icon/terminal-box-fill Remix Icon Docs}
 */
export const TerminalBoxFill = Icon
