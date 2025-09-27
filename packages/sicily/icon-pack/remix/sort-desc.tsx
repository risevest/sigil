import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 4v12h3l-4 5-4-5h3V4zm-8 14v2H3v-2zm2-7v2H3v-2zm0-7v2H3V4z" />
    </svg>
  )
})
Icon.displayName = 'SortDesc'
/**
 * Remix Icon: Sort Desc
 * @see {@link https://remixicon.com/icon/sort-desc Remix Icon Docs}
 */
export const SortDesc = Icon
