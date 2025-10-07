import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 3h2v18H6zm10 0h2v18h-2z" />
    </svg>
  )
})
Icon.displayName = 'PauseLargeFill'
/**
 * Remix Icon: Pause Large Fill
 * @see {@link https://remixicon.com/icon/pause-large-fill Remix Icon Docs}
 */
export const PauseLargeFill = Icon
