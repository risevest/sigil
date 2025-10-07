import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15 4h-2v7h7V9h-3.586l4.293-4.293-1.414-1.414L15 7.586zM4 15h3.586l-4.293 4.293 1.414 1.414L9 16.414V20h2v-7H4z" />
    </svg>
  )
})
Icon.displayName = 'CollapseDiagonalLine'
/**
 * Remix Icon: Collapse Diagonal Line
 * @see {@link https://remixicon.com/icon/collapse-diagonal-line Remix Icon Docs}
 */
export const CollapseDiagonalLine = Icon
