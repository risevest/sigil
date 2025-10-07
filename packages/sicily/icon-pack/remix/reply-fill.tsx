import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 20 1 12l10-8v5c5.523 0 10 4.477 10 10q0 .41-.032.81A9 9 0 0 0 13 15h-2z" />
    </svg>
  )
})
Icon.displayName = 'ReplyFill'
/**
 * Remix Icon: Reply Fill
 * @see {@link https://remixicon.com/icon/reply-fill Remix Icon Docs}
 */
export const ReplyFill = Icon
