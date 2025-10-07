import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 5h2v14H6zm10 0h2v14h-2z" />
    </svg>
  )
})
Icon.displayName = 'PauseFill'
/**
 * Remix Icon: Pause Fill
 * @see {@link https://remixicon.com/icon/pause-fill Remix Icon Docs}
 */
export const PauseFill = Icon
