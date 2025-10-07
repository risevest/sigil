import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M18.414 9 12 2.586 5.586 9H11v7h2V9zM3 14v4a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4h-2v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4z" />
    </svg>
  )
})
Icon.displayName = 'Share2Fill'
/**
 * Remix Icon: Share 2 Fill
 * @see {@link https://remixicon.com/icon/share-2-fill Remix Icon Docs}
 */
export const Share2Fill = Icon
