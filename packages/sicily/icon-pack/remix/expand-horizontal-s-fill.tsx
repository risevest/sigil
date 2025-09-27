import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7.45 7.05 2.5 12l4.947 4.947L7.448 13h9.102v3.95L21.5 12l-4.95-4.95V11H7.45z" />
    </svg>
  )
})
Icon.displayName = 'ExpandHorizontalSFill'
/**
 * Remix Icon: Expand Horizontal S Fill
 * @see {@link https://remixicon.com/icon/expand-horizontal-s-fill Remix Icon Docs}
 */
export const ExpandHorizontalSFill = Icon
