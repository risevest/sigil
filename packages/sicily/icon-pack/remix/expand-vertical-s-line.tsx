import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16.95 7.45 12 2.5 7.051 7.447 8.466 8.86 11 6.328V17.67l-2.536-2.535L7.05 16.55 12 21.5l4.95-4.95-1.414-1.414L13 17.672V6.328l2.535 2.535z" />
    </svg>
  )
})
Icon.displayName = 'ExpandVerticalSLine'
/**
 * Remix Icon: Expand Vertical S Line
 * @see {@link https://remixicon.com/icon/expand-vertical-s-line Remix Icon Docs}
 */
export const ExpandVerticalSLine = Icon
