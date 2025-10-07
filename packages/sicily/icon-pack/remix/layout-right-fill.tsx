import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4V3zm-6 18H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12z" />
    </svg>
  )
})
Icon.displayName = 'LayoutRightFill'
/**
 * Remix Icon: Layout Right Fill
 * @see {@link https://remixicon.com/icon/layout-right-fill Remix Icon Docs}
 */
export const LayoutRightFill = Icon
