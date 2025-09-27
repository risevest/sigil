import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M3 17a4 4 0 0 1 4 4H3zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16z" />
    </svg>
  )
})
Icon.displayName = 'RssLine'
/**
 * Remix Icon: Rss Line
 * @see {@link https://remixicon.com/icon/rss-line Remix Icon Docs}
 */
export const RssLine = Icon
