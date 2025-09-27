import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m15 2 4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-3 5.5a3 3 0 0 0-2.995 2.824L9 10.5h2a1 1 0 1 1 1.751.66l-.082.083L9 14.547 9 16h6v-2h-2.405l1.412-1.27-.006-.01.008.008A3 3 0 0 0 12 7.5" />
    </svg>
  )
})
Icon.displayName = 'DualSim2Fill'
/**
 * Remix Icon: Dual Sim 2 Fill
 * @see {@link https://remixicon.com/icon/dual-sim-2-fill Remix Icon Docs}
 */
export const DualSim2Fill = Icon
