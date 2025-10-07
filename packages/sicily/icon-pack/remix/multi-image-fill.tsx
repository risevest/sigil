import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M6 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3zm2 3h9a1 1 0 0 1 1 1v7h2V5H8zm8 8.74V9H4v9.632l7.491-6.992zM7 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    </svg>
  )
})
Icon.displayName = 'MultiImageFill'
/**
 * Remix Icon: Multi Image Fill
 * @see {@link https://remixicon.com/icon/multi-image-fill Remix Icon Docs}
 */
export const MultiImageFill = Icon
