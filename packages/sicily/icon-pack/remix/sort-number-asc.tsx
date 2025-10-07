import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9 3v8H7V5.41l-2 .539v-2.33L7.313 3zm10 0v13h3l-4 5-4-5h3V3zm-8 12.5c0 .564-.156 1.093-.427 1.544L8.289 21h-2.31l1.473-2.55A3.001 3.001 0 1 1 11 15.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </svg>
  )
})
Icon.displayName = 'SortNumberAsc'
/**
 * Remix Icon: Sort Number Asc
 * @see {@link https://remixicon.com/icon/sort-number-asc Remix Icon Docs}
 */
export const SortNumberAsc = Icon
