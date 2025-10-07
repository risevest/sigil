import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 4a3 3 0 1 1 5.83 1H18a1 1 0 0 1 1 1v4.17a3 3 0 1 1 0 5.659V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.17C8.06 4.687 8 4.35 8 4" />
    </svg>
  )
})
Icon.displayName = 'PuzzleFill'
/**
 * Remix Icon: Puzzle Fill
 * @see {@link https://remixicon.com/icon/puzzle-fill Remix Icon Docs}
 */
export const PuzzleFill = Icon
