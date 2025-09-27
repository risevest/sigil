import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M22 10H12v7.382c0 1.409.632 2.734 1.705 3.618H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zm-8 2h8v5.382c0 .897-.446 1.734-1.187 2.23L18 21.499l-2.812-1.885A2.68 2.68 0 0 1 14 17.383z" />
    </svg>
  )
})
Icon.displayName = 'FolderShield2Fill'
/**
 * Remix Icon: Folder Shield 2 Fill
 * @see {@link https://remixicon.com/icon/folder-shield-2-fill Remix Icon Docs}
 */
export const FolderShield2Fill = Icon
