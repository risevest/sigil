import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7.45 7.05 2.5 12l4.947 4.947 1.414-1.414L6.328 13h11.343l-2.535 2.535 1.414 1.414L21.5 12l-4.95-4.95-1.414 1.415L17.672 11H6.328l2.536-2.535z" />
    </svg>
  )
})
Icon.displayName = 'ExpandHorizontalSLine'
/**
 * Remix Icon: Expand Horizontal S Line
 * @see {@link https://remixicon.com/icon/expand-horizontal-s-line Remix Icon Docs}
 */
export const ExpandHorizontalSLine = Icon
