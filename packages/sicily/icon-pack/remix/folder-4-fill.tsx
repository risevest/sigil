import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M8 21V11h14v9a1 1 0 0 1-1 1zm-2 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1v3H7a1 1 0 0 0-1 1z" />
    </svg>
  )
})
Icon.displayName = 'Folder4Fill'
/**
 * Remix Icon: Folder 4 Fill
 * @see {@link https://remixicon.com/icon/folder-4-fill Remix Icon Docs}
 */
export const Folder4Fill = Icon
