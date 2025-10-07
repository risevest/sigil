import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m12 4v2h-4v2h4v2l3.5-3zm-6 10v-2h4v-2h-4v-2l-3.5 3z" />
    </svg>
  )
})
Icon.displayName = 'SwapBoxFill'
/**
 * Remix Icon: Swap Box Fill
 * @see {@link https://remixicon.com/icon/swap-box-fill Remix Icon Docs}
 */
export const SwapBoxFill = Icon
