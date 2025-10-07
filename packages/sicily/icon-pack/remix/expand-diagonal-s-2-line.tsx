import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M7 8.414V12H5V5h7v2H8.414L17 15.586V12h2v7h-7v-2h3.586z" />
    </svg>
  )
})
Icon.displayName = 'ExpandDiagonalS2Line'
/**
 * Remix Icon: Expand Diagonal S 2 Line
 * @see {@link https://remixicon.com/icon/expand-diagonal-s-2-line Remix Icon Docs}
 */
export const ExpandDiagonalS2Line = Icon
