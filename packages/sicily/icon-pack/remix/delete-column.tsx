import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 3a1 1 0 0 1 1 1v8a5 5 0 1 1 .213 8.152L13 20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H7v14h4zm8 10h-6v2h6z" />
    </svg>
  )
})
Icon.displayName = 'DeleteColumn'
/**
 * Remix Icon: Delete Column
 * @see {@link https://remixicon.com/icon/delete-column Remix Icon Docs}
 */
export const DeleteColumn = Icon
