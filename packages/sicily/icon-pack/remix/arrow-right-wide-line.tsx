import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m15.632 12-4.748-8.968-1.768.936L13.368 12l-4.252 8.032 1.768.936z" />
    </svg>
  )
})
Icon.displayName = 'ArrowRightWideLine'
/**
 * Remix Icon: Arrow Right Wide Line
 * @see {@link https://remixicon.com/icon/arrow-right-wide-line Remix Icon Docs}
 */
export const ArrowRightWideLine = Icon
