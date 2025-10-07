import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 14V5h2v7h10.172l-3.95-3.95 1.414-1.414L21 13l-6.364 6.364-1.414-1.414 3.95-3.95z" />
    </svg>
  )
})
Icon.displayName = 'CornerDownRightLine'
/**
 * Remix Icon: Corner Down Right Line
 * @see {@link https://remixicon.com/icon/corner-down-right-line Remix Icon Docs}
 */
export const CornerDownRightLine = Icon
