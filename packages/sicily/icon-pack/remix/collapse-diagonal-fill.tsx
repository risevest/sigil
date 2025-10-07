import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20.5 11H13V3.5l3.043 3.043 3.25-3.25 1.414 1.414-3.25 3.25zm-17 2H11v7.5l-3.043-3.043-3.25 3.25-1.414-1.414 3.25-3.25z" />
    </svg>
  )
})
Icon.displayName = 'CollapseDiagonalFill'
/**
 * Remix Icon: Collapse Diagonal Fill
 * @see {@link https://remixicon.com/icon/collapse-diagonal-fill Remix Icon Docs}
 */
export const CollapseDiagonalFill = Icon
