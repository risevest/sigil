import { memo } from 'react'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const props = _props
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M11 2v2H7v16h10v-9h2v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm2 5a2 2 0 0 1 2 2h-2zm0-3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3zm0-3a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6z" />
    </svg>
  )
})
Icon.displayName = 'HotspotLine'
/**
 * Remix Icon: Hotspot Line
 * @see {@link https://remixicon.com/icon/hotspot-line Remix Icon Docs}
 */
export const HotspotLine = Icon
