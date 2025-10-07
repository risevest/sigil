import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M4 19h16v-7h2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8h2zm9-10v7h-2V9H6l6-6 6 6z" />
    </svg>
  )
})
Icon.displayName = 'Upload2Line'
/**
 * Remix Icon: Upload 2 Line
 * @see {@link https://remixicon.com/icon/upload-2-line Remix Icon Docs}
 */
export const Upload2Line = Icon
