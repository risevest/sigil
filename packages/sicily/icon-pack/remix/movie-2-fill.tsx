import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18.001 20H20v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.99 9.99 0 0 1-3.999 8M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </svg>
  )
})
Icon.displayName = 'Movie2Fill'
/**
 * Remix Icon: Movie 2 Fill
 * @see {@link https://remixicon.com/icon/movie-2-fill Remix Icon Docs}
 */
export const Movie2Fill = Icon
