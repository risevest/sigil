import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M20 3v14a4 4 0 1 1-2-3.465V6H9v11a4 4 0 1 1-2-3.465V3z" />
    </svg>
  )
})
Icon.displayName = 'Music2Fill'
/**
 * Remix Icon: Music 2 Fill
 * @see {@link https://remixicon.com/icon/music-2-fill Remix Icon Docs}
 */
export const Music2Fill = Icon
