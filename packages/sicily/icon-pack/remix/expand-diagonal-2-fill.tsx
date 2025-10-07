import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3h7.5L7.457 6.043l3.25 3.25-1.414 1.414-3.25-3.25L3 10.5zm18 18h-7.5l3.043-3.043-3.25-3.25 1.414-1.414 3.25 3.25L21 13.5z" />
    </svg>
  )
})
Icon.displayName = 'ExpandDiagonal2Fill'
/**
 * Remix Icon: Expand Diagonal 2 Fill
 * @see {@link https://remixicon.com/icon/expand-diagonal-2-fill Remix Icon Docs}
 */
export const ExpandDiagonal2Fill = Icon
