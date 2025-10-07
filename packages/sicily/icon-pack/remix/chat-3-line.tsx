import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7.291 20.824 2 22l1.176-5.291A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-4.709-1.176m.29-2.113.653.35A7.96 7.96 0 0 0 12 20a8 8 0 1 0-8-8c0 1.335.325 2.617.94 3.766l.349.653-.655 2.947z" />
    </svg>
  )
})
Icon.displayName = 'Chat3Line'
/**
 * Remix Icon: Chat 3 Line
 * @see {@link https://remixicon.com/icon/chat-3-line Remix Icon Docs}
 */
export const Chat3Line = Icon
