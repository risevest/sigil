import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 3v4H3V3zm4 14v4H3v-4zm6-7v4H3v-4z" />
    </svg>
  )
})
Icon.displayName = 'BarChartHorizontalFill'
/**
 * Remix Icon: Bar Chart Horizontal Fill
 * @see {@link https://remixicon.com/icon/bar-chart-horizontal-fill Remix Icon Docs}
 */
export const BarChartHorizontalFill = Icon
