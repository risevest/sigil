import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </svg>
  )
})
Icon.displayName = 'Draggable'
/**
 * Remix Icon: Draggable
 * @see {@link https://remixicon.com/icon/draggable Remix Icon Docs}
 */
export const Draggable = Icon
