import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8m8.5-10a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11" />
    </svg>
  )
})
Icon.displayName = 'BubbleChartFill'
/**
 * Remix Icon: Bubble Chart Fill
 * @see {@link https://remixicon.com/icon/bubble-chart-fill Remix Icon Docs}
 */
export const BubbleChartFill = Icon
