import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 2h10l4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 10v6h8v-6z" />
    </svg>
  )
})
Icon.displayName = 'SimCardFill'
/**
 * Remix Icon: Sim Card Fill
 * @see {@link https://remixicon.com/icon/sim-card-fill Remix Icon Docs}
 */
export const SimCardFill = Icon
