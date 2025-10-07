import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 12h4v9H3zm14-4h4v13h-4zm-7-6h4v19h-4z" />
    </svg>
  )
})
Icon.displayName = 'BarChartFill'
/**
 * Remix Icon: Bar Chart Fill
 * @see {@link https://remixicon.com/icon/bar-chart-fill Remix Icon Docs}
 */
export const BarChartFill = Icon
