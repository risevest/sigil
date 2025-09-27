import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1zm-1 3H7a1 1 0 0 1 0-2h13z" />
    </svg>
  )
})
Icon.displayName = 'Book3Fill'
/**
 * Remix Icon: Book 3 Fill
 * @see {@link https://remixicon.com/icon/book-3-fill Remix Icon Docs}
 */
export const Book3Fill = Icon
