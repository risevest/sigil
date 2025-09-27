import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M14 4.5V9c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L16 15h-2v4.5L6 12zm-6 0v2.737L2.92 12l5.079 4.761L8 19.5 0 12z" />
    </svg>
  )
})
Icon.displayName = 'ReplyAllFill'
/**
 * Remix Icon: Reply All Fill
 * @see {@link https://remixicon.com/icon/reply-all-fill Remix Icon Docs}
 */
export const ReplyAllFill = Icon
