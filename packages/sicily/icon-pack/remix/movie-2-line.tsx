import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-2 6h-2.708A8 8 0 1 0 12 20m0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4m8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </svg>
  )
})
Icon.displayName = 'Movie2Line'
/**
 * Remix Icon: Movie 2 Line
 * @see {@link https://remixicon.com/icon/movie-2-line Remix Icon Docs}
 */
export const Movie2Line = Icon
