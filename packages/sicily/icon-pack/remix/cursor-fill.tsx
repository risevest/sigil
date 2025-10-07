import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13.91 12.36 17 20.854l-2.818 1.026-3.092-8.494-4.172 3.156 1.49-14.909 10.726 10.463z" />
    </svg>
  )
})
Icon.displayName = 'CursorFill'
/**
 * Remix Icon: Cursor Fill
 * @see {@link https://remixicon.com/icon/cursor-fill Remix Icon Docs}
 */
export const CursorFill = Icon
