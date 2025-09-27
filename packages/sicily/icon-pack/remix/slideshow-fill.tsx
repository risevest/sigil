import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1zM8 10a3 3 0 1 0 3 3H8zm5 0v2h6v-2zm0 4v2h6v-2zM2 3h20v2H2z" />
    </svg>
  )
})
Icon.displayName = 'SlideshowFill'
/**
 * Remix Icon: Slideshow Fill
 * @see {@link https://remixicon.com/icon/slideshow-fill Remix Icon Docs}
 */
export const SlideshowFill = Icon
