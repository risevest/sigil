import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m12 19.164 6.207-6.207-1.414-1.414L12 16.336l-4.793-4.793-1.414 1.414zm0-5.65 6.207-6.207-1.414-1.414L12 10.686 7.207 5.893 5.793 7.307z" />
    </svg>
  )
})
Icon.displayName = 'ArrowDownDoubleLine'
/**
 * Remix Icon: Arrow Down Double Line
 * @see {@link https://remixicon.com/icon/arrow-down-double-line Remix Icon Docs}
 */
export const ArrowDownDoubleLine = Icon
