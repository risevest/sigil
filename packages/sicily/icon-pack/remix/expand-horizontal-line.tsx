import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m.5 12 4.95-4.95 1.414 1.415L4.328 11H10v2H4.328l2.533 2.533-1.414 1.414zM14 13h5.67l-2.534 2.535 1.414 1.414L23.5 12l-4.95-4.95-1.414 1.415L19.672 11H14z" />
    </svg>
  )
})
Icon.displayName = 'ExpandHorizontalLine'
/**
 * Remix Icon: Expand Horizontal Line
 * @see {@link https://remixicon.com/icon/expand-horizontal-line Remix Icon Docs}
 */
export const ExpandHorizontalLine = Icon
