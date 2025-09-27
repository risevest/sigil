import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4zm2-2h8v4H8z" />
    </svg>
  )
})
Icon.displayName = 'ClipboardFill'
/**
 * Remix Icon: Clipboard Fill
 * @see {@link https://remixicon.com/icon/clipboard-fill Remix Icon Docs}
 */
export const ClipboardFill = Icon
