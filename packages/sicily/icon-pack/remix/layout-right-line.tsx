import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-6 2H4v14h11zm5 0h-3v14h3z" />
    </svg>
  )
})
Icon.displayName = 'LayoutRightLine'
/**
 * Remix Icon: Layout Right Line
 * @see {@link https://remixicon.com/icon/layout-right-line Remix Icon Docs}
 */
export const LayoutRightLine = Icon
