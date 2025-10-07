import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M19 8H5v2h14zm0 6H5v2h14z" />
    </svg>
  )
})
Icon.displayName = 'EqualFill'
/**
 * Remix Icon: Equal Fill
 * @see {@link https://remixicon.com/icon/equal-fill Remix Icon Docs}
 */
export const EqualFill = Icon
