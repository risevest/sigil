import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 13a5 5 0 1 1 0 10 5 5 0 0 1 0-10m1 2h-2v1.999L9 17v2l2-.001V21h2v-2.001L15 19v-2l-2-.001zm7-12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM5 5v4h14V5z" />
    </svg>
  )
})
Icon.displayName = 'InsertRowBottom'
/**
 * Remix Icon: Insert Row Bottom
 * @see {@link https://remixicon.com/icon/insert-row-bottom Remix Icon Docs}
 */
export const InsertRowBottom = Icon
