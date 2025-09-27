import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M2 18h10v2H2zm0-7h14v2H2zm0-7h20v2H2zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83" />
    </svg>
  )
})
Icon.displayName = 'PlayListFill'
/**
 * Remix Icon: Play List Fill
 * @see {@link https://remixicon.com/icon/play-list-fill Remix Icon Docs}
 */
export const PlayListFill = Icon
