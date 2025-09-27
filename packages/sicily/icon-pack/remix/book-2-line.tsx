import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 18H6a1 1 0 1 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16zM5 16.05q.243-.05.5-.05H19V4H5zM16 9H8V7h8z" />
    </svg>
  )
})
Icon.displayName = 'Book2Line'
/**
 * Remix Icon: Book 2 Line
 * @see {@link https://remixicon.com/icon/book-2-line Remix Icon Docs}
 */
export const Book2Line = Icon
