import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 13a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-1 2H5v4h14zM12 1a5 5 0 1 1 0 10 5 5 0 0 1 0-10m1 2h-2v1.999L9 5v2l2-.001V9h2V6.999L15 7V5l-2-.001z" />
    </svg>
  )
})
Icon.displayName = 'InsertRowTop'
/**
 * Remix Icon: Insert Row Top
 * @see {@link https://remixicon.com/icon/insert-row-top Remix Icon Docs}
 */
export const InsertRowTop = Icon
