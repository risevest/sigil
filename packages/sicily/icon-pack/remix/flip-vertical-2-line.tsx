import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M5 19h14V5H5zM3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm5 6 4-4 4 4h-3v4h3l-4 4-4-4h3v-4z" />
    </svg>
  )
})
Icon.displayName = 'FlipVertical2Line'
/**
 * Remix Icon: Flip Vertical 2 Line
 * @see {@link https://remixicon.com/icon/flip-vertical-2-line Remix Icon Docs}
 */
export const FlipVertical2Line = Icon
