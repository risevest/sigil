import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1 5 5 0 1 1-8 0H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm-7 10v2h6v-2zm6-8H5v4h14z" />
    </svg>
  )
})
Icon.displayName = 'DeleteRow'
/**
 * Remix Icon: Delete Row
 * @see {@link https://remixicon.com/icon/delete-row Remix Icon Docs}
 */
export const DeleteRow = Icon
