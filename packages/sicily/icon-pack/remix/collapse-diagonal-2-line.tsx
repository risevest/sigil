import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M9 4h2v7H4V9h3.586L3.293 4.707l1.414-1.414L9 7.586zm11 11h-3.586l4.293 4.293-1.414 1.414L15 16.414V20h-2v-7h7z" />
    </svg>
  )
})
Icon.displayName = 'CollapseDiagonal2Line'
/**
 * Remix Icon: Collapse Diagonal 2 Line
 * @see {@link https://remixicon.com/icon/collapse-diagonal-2-line Remix Icon Docs}
 */
export const CollapseDiagonal2Line = Icon
