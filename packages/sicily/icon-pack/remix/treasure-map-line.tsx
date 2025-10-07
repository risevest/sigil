import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="m14.935 7.204-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033zM2 5l7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46zm4 6h2v2H6zm4 0h2v2h-2zm5.998-.063L17.235 9.7l1.061 1.06-1.237 1.238 1.237 1.238-1.06 1.06-1.238-1.237-1.237 1.237-1.061-1.06 1.237-1.238-1.237-1.237L14.76 9.7z" />
    </svg>
  )
})
Icon.displayName = 'TreasureMapLine'
/**
 * Remix Icon: Treasure Map Line
 * @see {@link https://remixicon.com/icon/treasure-map-line Remix Icon Docs}
 */
export const TreasureMapLine = Icon
