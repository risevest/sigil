import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm6 5v3h4V8l4 4-4 4v-3h-4v3l-4-4z" />
    </svg>
  )
})
Icon.displayName = 'FlipHorizontal2Fill'
/**
 * Remix Icon: Flip Horizontal 2 Fill
 * @see {@link https://remixicon.com/icon/flip-horizontal-2-fill Remix Icon Docs}
 */
export const FlipHorizontal2Fill = Icon
