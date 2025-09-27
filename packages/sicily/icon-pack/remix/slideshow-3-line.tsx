import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 18v2h4v2H7v-2h4v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zM4 5v11h16V5zm6 2.5 5 3-5 3z" />
    </svg>
  )
})
Icon.displayName = 'Slideshow3Line'
/**
 * Remix Icon: Slideshow 3 Line
 * @see {@link https://remixicon.com/icon/slideshow-3-line Remix Icon Docs}
 */
export const Slideshow3Line = Icon
