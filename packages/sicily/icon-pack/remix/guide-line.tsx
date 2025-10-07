import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 8v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h3V2l5 4-5 4V7h-3a1 1 0 0 0-1 1M5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </svg>
  )
})
Icon.displayName = 'GuideLine'
/**
 * Remix Icon: Guide Line
 * @see {@link https://remixicon.com/icon/guide-line Remix Icon Docs}
 */
export const GuideLine = Icon
