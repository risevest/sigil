import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 11h14v2H5zm7-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    </svg>
  )
})
Icon.displayName = 'DivideLine'
/**
 * Remix Icon: Divide Line
 * @see {@link https://remixicon.com/icon/divide-line Remix Icon Docs}
 */
export const DivideLine = Icon
