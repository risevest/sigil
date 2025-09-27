import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16.572 8.027a5 5 0 1 0-5.101 2.945 7 7 0 0 1 5.1-2.945m-3.418 9.92a7 7 0 0 0 0-5.892 5 5 0 1 1 0 5.89m-6.88-7.92a7 7 0 0 0 5.1 2.946 5 5 0 1 1-5.1-2.946" />
    </svg>
  )
})
Icon.displayName = 'ColorFilterFill'
/**
 * Remix Icon: Color Filter Fill
 * @see {@link https://remixicon.com/icon/color-filter-fill Remix Icon Docs}
 */
export const ColorFilterFill = Icon
