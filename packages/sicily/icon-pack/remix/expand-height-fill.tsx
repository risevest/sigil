import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18 2H6v2h12zm-1.05 7.45L12 4.5 7.053 9.447 11 9.448v5.102H7.05L12 19.5l4.95-4.95H13V9.45zM18 20v2H6v-2z" />
    </svg>
  )
})
Icon.displayName = 'ExpandHeightFill'
/**
 * Remix Icon: Expand Height Fill
 * @see {@link https://remixicon.com/icon/expand-height-fill Remix Icon Docs}
 */
export const ExpandHeightFill = Icon
