import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm3 8h2v4H7zm4-6h2v10h-2zm4 3h2v7h-2z" />
    </svg>
  )
})
Icon.displayName = 'BarChartBoxLine'
/**
 * Remix Icon: Bar Chart Box Line
 * @see {@link https://remixicon.com/icon/bar-chart-box-line Remix Icon Docs}
 */
export const BarChartBoxLine = Icon
