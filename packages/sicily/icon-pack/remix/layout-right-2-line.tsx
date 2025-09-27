import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H4v14h16zm-2 2v10h-2V7z" />
    </svg>
  )
})
Icon.displayName = 'LayoutRight2Line'
/**
 * Remix Icon: Layout Right 2 Line
 * @see {@link https://remixicon.com/icon/layout-right-2-line Remix Icon Docs}
 */
export const LayoutRight2Line = Icon
