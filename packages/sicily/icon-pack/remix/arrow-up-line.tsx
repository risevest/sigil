import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414z" />
    </svg>
  )
})
Icon.displayName = 'ArrowUpLine'
/**
 * Remix Icon: Arrow Up Line
 * @see {@link https://remixicon.com/icon/arrow-up-line Remix Icon Docs}
 */
export const ArrowUpLine = Icon
