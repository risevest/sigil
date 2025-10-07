import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m19 3 4 5h-3v12h-2V8h-3zm-5 15v2H3v-2zm0-7v2H3v-2zm-2-7v2H3V4z" />
    </svg>
  )
})
Icon.displayName = 'SortAsc'
/**
 * Remix Icon: Sort Asc
 * @see {@link https://remixicon.com/icon/sort-asc Remix Icon Docs}
 */
export const SortAsc = Icon
