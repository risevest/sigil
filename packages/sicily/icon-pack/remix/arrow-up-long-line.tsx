import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 22h-2V5.828l-3.95 3.95-1.414-1.414L12 2l6.364 6.364-1.414 1.414L13 5.828z" />
    </svg>
  )
})
Icon.displayName = 'ArrowUpLongLine'
/**
 * Remix Icon: Arrow Up Long Line
 * @see {@link https://remixicon.com/icon/arrow-up-long-line Remix Icon Docs}
 */
export const ArrowUpLongLine = Icon
