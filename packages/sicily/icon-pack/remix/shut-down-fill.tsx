import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 2.05V12h2V2.05c5.053.501 9 4.765 9 9.95 0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.449 9-9.95" />
    </svg>
  )
})
Icon.displayName = 'ShutDownFill'
/**
 * Remix Icon: Shut Down Fill
 * @see {@link https://remixicon.com/icon/shut-down-fill Remix Icon Docs}
 */
export const ShutDownFill = Icon
