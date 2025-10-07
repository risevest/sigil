import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m15 2 4.707 4.707a1 1 0 0 1 .293.707V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm-.829 2H6v16h12V7.829zM13 16h-2v-6h-1V8h3z" />
    </svg>
  )
})
Icon.displayName = 'DualSim1Line'
/**
 * Remix Icon: Dual Sim 1 Line
 * @see {@link https://remixicon.com/icon/dual-sim-1-line Remix Icon Docs}
 */
export const DualSim1Line = Icon
