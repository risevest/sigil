import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8m2 14h2a6 6 0 0 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48z" />
    </svg>
  )
})
Icon.displayName = 'Chat1Line'
/**
 * Remix Icon: Chat 1 Line
 * @see {@link https://remixicon.com/icon/chat-1-line Remix Icon Docs}
 */
export const Chat1Line = Icon
