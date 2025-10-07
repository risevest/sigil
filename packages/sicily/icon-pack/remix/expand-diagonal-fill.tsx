import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3h-7.5l3.043 3.043-3.25 3.25 1.414 1.414 3.25-3.25L21 10.5zM3 21h7.5l-3.043-3.043 3.25-3.25-1.414-1.414-3.25 3.25L3 13.5z" />
    </svg>
  )
})
Icon.displayName = 'ExpandDiagonalFill'
/**
 * Remix Icon: Expand Diagonal Fill
 * @see {@link https://remixicon.com/icon/expand-diagonal-fill Remix Icon Docs}
 */
export const ExpandDiagonalFill = Icon
