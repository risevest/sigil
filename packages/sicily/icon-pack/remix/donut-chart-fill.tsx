import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 2.05v3.02a7.002 7.002 0 1 0 5.192 12.536l2.137 2.137A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95M21.95 13a9.95 9.95 0 0 1-2.207 5.328l-2.137-2.136A6.97 6.97 0 0 0 18.93 13zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-3.022a7.005 7.005 0 0 0-5.928-5.929z" />
    </svg>
  )
})
Icon.displayName = 'DonutChartFill'
/**
 * Remix Icon: Donut Chart Fill
 * @see {@link https://remixicon.com/icon/donut-chart-fill Remix Icon Docs}
 */
export const DonutChartFill = Icon
