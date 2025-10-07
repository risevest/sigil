import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM7 5H4v14h3zm13 0H9v14h11z" />
    </svg>
  )
})
Icon.displayName = 'LayoutLeftLine'
/**
 * Remix Icon: Layout Left Line
 * @see {@link https://remixicon.com/icon/layout-left-line Remix Icon Docs}
 */
export const LayoutLeftLine = Icon
