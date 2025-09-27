import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m9 6-6 6 6 6zm6 12 6-6-6-6z" />
    </svg>
  )
})
Icon.displayName = 'ExpandLeftRightFill'
/**
 * Remix Icon: Expand Left Right Fill
 * @see {@link https://remixicon.com/icon/expand-left-right-fill Remix Icon Docs}
 */
export const ExpandLeftRightFill = Icon
