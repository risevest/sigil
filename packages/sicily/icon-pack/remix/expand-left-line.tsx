import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m10.071 4.929 1.414 1.414L6.828 11H16v2H6.828l4.657 4.657-1.414 1.414L3 12zM18.001 19V5h2v14z" />
    </svg>
  )
})
Icon.displayName = 'ExpandLeftLine'
/**
 * Remix Icon: Expand Left Line
 * @see {@link https://remixicon.com/icon/expand-left-line Remix Icon Docs}
 */
export const ExpandLeftLine = Icon
