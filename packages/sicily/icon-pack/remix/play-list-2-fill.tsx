import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 18v2H2v-2zM2 3.5l8 5-8 5zM22 11v2H12v-2zm0-7v2H12V4z" />
    </svg>
  )
})
Icon.displayName = 'PlayList2Fill'
/**
 * Remix Icon: Play List 2 Fill
 * @see {@link https://remixicon.com/icon/play-list-2-fill Remix Icon Docs}
 */
export const PlayList2Fill = Icon
