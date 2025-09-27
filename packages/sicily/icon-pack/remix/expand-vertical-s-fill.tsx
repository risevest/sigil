import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16.95 7.45 12 2.5 7.051 7.447H11v9.103H7.05L12 21.5l4.95-4.95H13V7.448z" />
    </svg>
  )
})
Icon.displayName = 'ExpandVerticalSFill'
/**
 * Remix Icon: Expand Vertical S Fill
 * @see {@link https://remixicon.com/icon/expand-vertical-s-fill Remix Icon Docs}
 */
export const ExpandVerticalSFill = Icon
