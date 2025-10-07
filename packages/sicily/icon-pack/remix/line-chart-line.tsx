import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 3v16h16v2H3V3zm15.293 3.293 1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999z" />
    </svg>
  )
})
Icon.displayName = 'LineChartLine'
/**
 * Remix Icon: Line Chart Line
 * @see {@link https://remixicon.com/icon/line-chart-line Remix Icon Docs}
 */
export const LineChartLine = Icon
