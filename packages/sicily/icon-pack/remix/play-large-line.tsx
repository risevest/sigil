import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 18.392V5.608L18.226 12zM6 3.804v16.392a1 1 0 0 0 1.53.848l13.113-8.196a1 1 0 0 0 0-1.696L7.53 2.956A1 1 0 0 0 6 3.804" />
    </svg>
  )
})
Icon.displayName = 'PlayLargeLine'
/**
 * Remix Icon: Play Large Line
 * @see {@link https://remixicon.com/icon/play-large-line Remix Icon Docs}
 */
export const PlayLargeLine = Icon
