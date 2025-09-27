import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z" />
    </svg>
  )
})
Icon.displayName = 'Filter3Line'
/**
 * Remix Icon: Filter 3 Line
 * @see {@link https://remixicon.com/icon/filter-3-line Remix Icon Docs}
 */
export const Filter3Line = Icon
