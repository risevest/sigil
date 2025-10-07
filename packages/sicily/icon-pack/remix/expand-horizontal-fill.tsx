import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m.5 12 4.95-4.95L5.449 11H10v2H5.448v3.947zM14 13h4.55v3.95L23.5 12l-4.95-4.95V11H14z" />
    </svg>
  )
})
Icon.displayName = 'ExpandHorizontalFill'
/**
 * Remix Icon: Expand Horizontal Fill
 * @see {@link https://remixicon.com/icon/expand-horizontal-fill Remix Icon Docs}
 */
export const ExpandHorizontalFill = Icon
