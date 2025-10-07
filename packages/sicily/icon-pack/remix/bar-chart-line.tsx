import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 12h2v9H3zm16-4h2v13h-2zm-8-6h2v19h-2z" />
    </svg>
  )
})
Icon.displayName = 'BarChartLine'
/**
 * Remix Icon: Bar Chart Line
 * @see {@link https://remixicon.com/icon/bar-chart-line Remix Icon Docs}
 */
export const BarChartLine = Icon
