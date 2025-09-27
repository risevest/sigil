import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 10H4v9h16zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m2 3v2h2V6zm4 0v2h2V6zm-4 5h3v5H5z" />
    </svg>
  )
})
Icon.displayName = 'TerminalWindowFill'
/**
 * Remix Icon: Terminal Window Fill
 * @see {@link https://remixicon.com/icon/terminal-window-fill Remix Icon Docs}
 */
export const TerminalWindowFill = Icon
