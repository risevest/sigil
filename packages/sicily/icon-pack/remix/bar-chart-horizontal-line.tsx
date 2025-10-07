import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 3v2H3V3zm4 16v2H3v-2zm6-8v2H3v-2z" />
    </svg>
  )
})
Icon.displayName = 'BarChartHorizontalLine'
/**
 * Remix Icon: Bar Chart Horizontal Line
 * @see {@link https://remixicon.com/icon/bar-chart-horizontal-line Remix Icon Docs}
 */
export const BarChartHorizontalLine = Icon
