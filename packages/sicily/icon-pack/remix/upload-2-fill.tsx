import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2zM14 9v6h-4V9H5l7-7 7 7z" />
    </svg>
  )
})
Icon.displayName = 'Upload2Fill'
/**
 * Remix Icon: Upload 2 Fill
 * @see {@link https://remixicon.com/icon/upload-2-fill Remix Icon Docs}
 */
export const Upload2Fill = Icon
