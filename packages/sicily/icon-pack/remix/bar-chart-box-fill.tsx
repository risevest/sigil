import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 10v4h2v-4zm4-6v10h2V7zm4 3v7h2v-7z" />
    </svg>
  )
})
Icon.displayName = 'BarChartBoxFill'
/**
 * Remix Icon: Bar Chart Box Fill
 * @see {@link https://remixicon.com/icon/bar-chart-box-fill Remix Icon Docs}
 */
export const BarChartBoxFill = Icon
