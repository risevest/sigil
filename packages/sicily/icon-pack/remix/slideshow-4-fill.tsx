import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8.17 3A3 3 0 0 1 11 1h2c1.306 0 2.418.835 2.83 2H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM10 9v6l5-3zm1-6a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" />
    </svg>
  )
})
Icon.displayName = 'Slideshow4Fill'
/**
 * Remix Icon: Slideshow 4 Fill
 * @see {@link https://remixicon.com/icon/slideshow-4-fill Remix Icon Docs}
 */
export const Slideshow4Fill = Icon
