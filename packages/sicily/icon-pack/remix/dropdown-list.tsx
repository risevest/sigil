import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 5v14h9v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5h-2V5zm15.707 6.293L19 10.586l-.707.707-3 3 1.414 1.414L19 13.414l2.293 2.293 1.414-1.414zm-3 6L19 19.586l2.293-2.293 1.414 1.414-3 3-.707.707-.707-.707-3-3z" />
    </svg>
  )
})
Icon.displayName = 'DropdownList'
/**
 * Remix Icon: Dropdown List
 * @see {@link https://remixicon.com/icon/dropdown-list Remix Icon Docs}
 */
export const DropdownList = Icon
