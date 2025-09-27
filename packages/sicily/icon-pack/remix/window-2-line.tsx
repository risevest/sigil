import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 8H4v8h16zm0-6H4v4h16zm-1 1v2h-4V6z" />
    </svg>
  )
})
Icon.displayName = 'Window2Line'
/**
 * Remix Icon: Window 2 Line
 * @see {@link https://remixicon.com/icon/window-2-line Remix Icon Docs}
 */
export const Window2Line = Icon
