import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4.869 11H2.667L6 3h2l3.333 8H9.131l-.41-1H5.28zm1.23-3h1.803L7 5.8zm15.9 0-4-5-4 5h3v13h2V8zm-11 5H3v2h4.855L3 19v2h8v-2H6.146L11 15z" />
    </svg>
  )
})
Icon.displayName = 'SortAlphabetDesc'
/**
 * Remix Icon: Sort Alphabet Desc
 * @see {@link https://remixicon.com/icon/sort-alphabet-desc Remix Icon Docs}
 */
export const SortAlphabetDesc = Icon
