import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15 8.482v7.036L8.97 12zm1.248-3.043L5.74 11.569a.5.5 0 0 0 0 .863l10.508 6.13A.5.5 0 0 0 17 18.13V5.87a.5.5 0 0 0-.752-.431" />
    </svg>
  )
})
Icon.displayName = 'PlayReverseMiniLine'
/**
 * Remix Icon: Play Reverse Mini Line
 * @see {@link https://remixicon.com/icon/play-reverse-mini-line Remix Icon Docs}
 */
export const PlayReverseMiniLine = Icon
