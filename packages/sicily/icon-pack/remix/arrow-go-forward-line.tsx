import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18.172 7H11a6 6 0 0 0 0 12h9v2h-9a8 8 0 0 1 0-16h7.172l-2.536-2.536L17.05 1.05 22 6l-4.95 4.95-1.414-1.415z" />
    </svg>
  )
})
Icon.displayName = 'ArrowGoForwardLine'
/**
 * Remix Icon: Arrow Go Forward Line
 * @see {@link https://remixicon.com/icon/arrow-go-forward-line Remix Icon Docs}
 */
export const ArrowGoForwardLine = Icon
