import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M16 18.392V5.608L5.774 12zm2-14.588v16.392a1 1 0 0 1-1.53.848L3.357 12.848a1 1 0 0 1 0-1.696L16.47 2.956a1 1 0 0 1 1.53.848" />
    </svg>
  )
})
Icon.displayName = 'PlayReverseLargeLine'
/**
 * Remix Icon: Play Reverse Large Line
 * @see {@link https://remixicon.com/icon/play-reverse-large-line Remix Icon Docs}
 */
export const PlayReverseLargeLine = Icon
