import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M21 3a1 1 0 0 1 1 1v7h-2V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zm-1 2h-6v4h6zm-8.5-8L9.457 9.043l2.25 2.25-1.414 1.414-2.25-2.25L6 12.5V7z" />
    </svg>
  )
})
Icon.displayName = 'PictureInPictureExitLine'
/**
 * Remix Icon: Picture In Picture Exit Line
 * @see {@link https://remixicon.com/icon/picture-in-picture-exit-line Remix Icon Docs}
 */
export const PictureInPictureExitLine = Icon
