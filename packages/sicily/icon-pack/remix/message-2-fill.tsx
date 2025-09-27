import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6.455 19 2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM7 10v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z" />
    </svg>
  )
})
Icon.displayName = 'Message2Fill'
/**
 * Remix Icon: Message 2 Fill
 * @see {@link https://remixicon.com/icon/message-2-fill Remix Icon Docs}
 */
export const Message2Fill = Icon
