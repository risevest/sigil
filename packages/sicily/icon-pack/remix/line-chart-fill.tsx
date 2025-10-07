import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 3v16h16v2H3V3zm14.94 2.94 2.12 2.12L16 14.122l-3-3-3.94 3.94-2.12-2.122L13 6.88l3 3z" />
    </svg>
  )
})
Icon.displayName = 'LineChartFill'
/**
 * Remix Icon: Line Chart Fill
 * @see {@link https://remixicon.com/icon/line-chart-fill Remix Icon Docs}
 */
export const LineChartFill = Icon
