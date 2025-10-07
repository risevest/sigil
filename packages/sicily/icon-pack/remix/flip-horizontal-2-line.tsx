import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm7 4v3h4V8l4 4-4 4v-3h-4v3l-4-4z" />
    </svg>
  )
})
Icon.displayName = 'FlipHorizontal2Line'
/**
 * Remix Icon: Flip Horizontal 2 Line
 * @see {@link https://remixicon.com/icon/flip-horizontal-2-line Remix Icon Docs}
 */
export const FlipHorizontal2Line = Icon
