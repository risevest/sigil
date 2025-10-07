import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994zM14 11v2h2v-2zm-6 0v2h2v-2z" />
    </svg>
  )
})
Icon.displayName = 'Message3Fill'
/**
 * Remix Icon: Message 3 Fill
 * @see {@link https://remixicon.com/icon/message-3-fill Remix Icon Docs}
 */
export const Message3Fill = Icon
