import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M10 14 4 5V3h16v2l-6 9v6l-4 2z" />
    </svg>
  )
})
Icon.displayName = 'Filter2Fill'
/**
 * Remix Icon: Filter 2 Fill
 * @see {@link https://remixicon.com/icon/filter-2-fill Remix Icon Docs}
 */
export const Filter2Fill = Icon
