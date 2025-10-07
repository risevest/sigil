import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m4.222 5.636 1.414-1.414L17.07 15.657V10.07h2v9h-9v-2h5.586z" />
    </svg>
  )
})
Icon.displayName = 'ArrowRightDownLongLine'
/**
 * Remix Icon: Arrow Right Down Long Line
 * @see {@link https://remixicon.com/icon/arrow-right-down-long-line Remix Icon Docs}
 */
export const ArrowRightDownLongLine = Icon
