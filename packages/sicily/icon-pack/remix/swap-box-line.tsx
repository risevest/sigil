import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4.005 5.003v14h16v-14zm-1-2h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m12 4 3.5 3-3.5 3v-2h-4v-2h4zm-6 10-3.5-3 3.5-3v2h4v2h-4z" />
    </svg>
  )
})
Icon.displayName = 'SwapBoxLine'
/**
 * Remix Icon: Swap Box Line
 * @see {@link https://remixicon.com/icon/swap-box-line Remix Icon Docs}
 */
export const SwapBoxLine = Icon
