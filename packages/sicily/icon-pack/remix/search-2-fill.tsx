import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9m8.485 16.071 2.829 2.828-1.415 1.415-2.828-2.829z" />
    </svg>
  )
})
Icon.displayName = 'Search2Fill'
/**
 * Remix Icon: Search 2 Fill
 * @see {@link https://remixicon.com/icon/search-2-fill Remix Icon Docs}
 */
export const Search2Fill = Icon
