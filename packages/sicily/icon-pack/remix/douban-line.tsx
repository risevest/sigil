import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15.274 15H5V7h14v8h-1.624l-1.3 4H21v2H3v-2h4.612L6.8 16.5l1.902-.618L9.715 19h4.259zM3.5 3h17v2h-17zM7 9v4h10V9z" />
    </svg>
  )
})
Icon.displayName = 'DoubanLine'
/**
 * Remix Icon: Douban Line
 * @see {@link https://remixicon.com/icon/douban-line Remix Icon Docs}
 */
export const DoubanLine = Icon
