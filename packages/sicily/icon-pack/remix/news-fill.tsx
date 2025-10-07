import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm3 4h6v6H6zm2 2v2h2V9zm10 0h-4V7h4zm-4 4v-2h4v2zm-8 4v-2h12v2z" />
    </svg>
  )
})
Icon.displayName = 'NewsFill'
/**
 * Remix Icon: News Fill
 * @see {@link https://remixicon.com/icon/news-fill Remix Icon Docs}
 */
export const NewsFill = Icon
